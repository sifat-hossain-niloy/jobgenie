from fastapi import APIRouter, HTTPException, Depends, status, File, UploadFile, Form
from models.user import User
from models.user_data import UserData
from config.database import users_collection, user_data_collection
from schema.serializer import serializeDict
from bson import ObjectId
import pymongo
from utils.auth import get_password_hash, verify_password, create_access_token, ACCESS_TOKEN_EXPIRE_MINUTES, SECRET_KEY, ALGORITHM
from fastapi.security import OAuth2PasswordBearer, OAuth2PasswordRequestForm
from datetime import timedelta
from jose import JWTError, jwt
from pydantic import BaseModel
import base64
from fastapi.responses import StreamingResponse
import io

user_router = APIRouter()
oauth2_scheme = OAuth2PasswordBearer(tokenUrl="token")

class LoginRequest(BaseModel):
    username: str
    password: str

# Helper function to encode image data
def encode_image(data):
    if data:
        return base64.b64encode(data).decode('utf-8')
    return None

# Create a new user
@user_router.post("/signup", response_model=User)
async def create_user(user: User):
    user.password = get_password_hash(user.password)
    new_user = dict(user)
    try:
        result = users_collection.insert_one(new_user)
        created_user = users_collection.find_one({"_id": result.inserted_id})
        
        # Create corresponding entry in user_data collection
        user_data_entry = {
            "userId": str(created_user["_id"]),
            "name": "",
            "phone": "",
            "email": created_user["email"],
            "address": "",
            "city": "",
            "zip": "",
            "country": "",
            "profileImage": None
        }
        user_data_collection.insert_one(user_data_entry)
        
        return serializeDict(created_user)
    except pymongo.errors.DuplicateKeyError:
        raise HTTPException(status_code=400, detail="Username or email already exists")


# Login user
@user_router.post("/token", response_model=dict)
async def login_for_access_token(login_request: LoginRequest):
    user = users_collection.find_one({"username": login_request.username})
    if not user:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Incorrect username or password",
            headers={"WWW-Authenticate": "Bearer"},
        )
    user = serializeDict(user)
    if not verify_password(login_request.password, user["password"]):
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Incorrect username or password",
            headers={"WWW-Authenticate": "Bearer"},
        )
    access_token_expires = timedelta(minutes=ACCESS_TOKEN_EXPIRE_MINUTES)
    access_token = create_access_token(
        data={"sub": user["username"]}, expires_delta=access_token_expires
    )
    return {
        "accessToken": access_token,
        "tokenType": "bearer",
        "userId": str(user["_id"]),
        "username": user["username"]
    }

# Utility to get the current user
async def get_current_user(token: str = Depends(oauth2_scheme)):
    try:
        payload = jwt.decode(token, SECRET_KEY, algorithms=[ALGORITHM])
        username: str = payload.get("sub")
        if username is None:
            raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED,
                                detail="Could not validate credentials",
                                headers={"WWW-Authenticate": "Bearer"})
        user = users_collection.find_one({"username": username})
        if user is None:
            raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED,
                                detail="Could not validate credentials",
                                headers={"WWW-Authenticate": "Bearer"})
        return serializeDict(user)
    except JWTError:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Could not validate credentials",
            headers={"WWW-Authenticate": "Bearer"},
        )

# Example protected route
@user_router.get("/users/me", response_model=User)
async def read_users_me(current_user: User = Depends(get_current_user)):
    return current_user

# Fetch user profile information
@user_router.get("/user/profile", response_model=UserData)
async def get_user_profile(current_user: User = Depends(get_current_user)):
    user_data = user_data_collection.find_one({"userId": current_user["_id"]})
    if not user_data:
        raise HTTPException(status_code=404, detail="User data not found")
    user_data['profileImage'] = encode_image(user_data.get('profileImage'))
    return serializeDict(user_data)

# Update user profile information
@user_router.put("/user/profile", response_model=UserData)
async def update_user_profile(
    userId: str = Form(...),
    name: str = Form(...),
    phone: str = Form(...),
    email: str = Form(...),
    address: str = Form(...),
    city: str = Form(...),
    zip: str = Form(...),
    country: str = Form(...),
    file: UploadFile = File(None),
    current_user: User = Depends(get_current_user)
):
    update_data = {
        "name": name,
        "phone": phone,
        "email": email,
        "address": address,
        "city": city,
        "zip": zip,
        "country": country
    }
    if file:
        file_content = await file.read()
        update_data["profileImage"] = file_content
    user_data_collection.update_one({"userId": userId}, {"$set": update_data})
    updated_user_data = user_data_collection.find_one({"userId": userId})
    updated_user_data['profileImage'] = encode_image(updated_user_data.get('profileImage'))
    return serializeDict(updated_user_data)

# Fetch user profile image
@user_router.get("/user/profile/image", response_class=StreamingResponse)
async def get_user_profile_image(current_user: User = Depends(get_current_user)):
    user_data = user_data_collection.find_one({"userId": current_user["_id"]})
    if not user_data or "profileImage" not in user_data or not user_data["profileImage"]:
        raise HTTPException(status_code=404, detail="User image not found")
    
    image_data = user_data["profileImage"]
    return StreamingResponse(io.BytesIO(image_data), media_type="image/jpeg")