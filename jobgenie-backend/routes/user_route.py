from fastapi import APIRouter, HTTPException
from models.user import User
from config.database import users_collection
from schema.serializer import serializeDict, serializeList
from bson import ObjectId
import pymongo

user_router = APIRouter()

# Get all users
@user_router.get("/users")
async def get_users():
    users = serializeList(users_collection.find())
    return users


# Create a new user
@user_router.post("/users")
async def create_user(user: User):
    new_user = dict(user)
    try:
        result = users_collection.insert_one(new_user)
        created_user = users_collection.find_one({"_id": result.inserted_id})
        return serializeDict(created_user)
    except pymongo.errors.DuplicateKeyError:
        raise HTTPException(status_code=400, detail="Username or email already exists")

# Update a user
@user_router.put("/users/{user_id}")
async def update_user(user_id: str, user: User):
    user = dict(user)
    try:
        update_result = users_collection.update_one({"_id": ObjectId(user_id)}, {"$set": user})
        if update_result.modified_count == 0:
            raise HTTPException(status_code=404, detail="User not found")
        updated_user = users_collection.find_one({"_id": ObjectId(user_id)})
        return serializeDict(updated_user)
    except pymongo.errors.DuplicateKeyError:
        raise HTTPException(status_code=400, detail="Username already exists")

# Delete a user
@user_router.delete("/users/{user_id}")
async def delete_user(user_id: str):
    users_collection.delete_one({"_id": ObjectId(user_id)})
    return {"message": "User has been deleted successfully."}