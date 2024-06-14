from pydantic import BaseModel, Field
from typing import Optional
import base64

class UserData(BaseModel):
    userId: str
    name: Optional[str] = None
    phone: Optional[str] = None
    email: Optional[str] = None
    address: Optional[str] = None
    city: Optional[str] = None
    zip: Optional[str] = None
    country: Optional[str] = None
    profileImage: Optional[str] = None

    class Config:
        orm_mode: True
        schema_extra = {
            "example": {
                "userId": "60d0fe4f5311236168a109ca",
                "name": "John Doe",
                "phone": "123-456-7890",
                "email": "john.doe@example.com",
                "address": "123 Main St",
                "city": "Springfield",
                "zip": "12345",
                "country": "USA",
                "profileImage": None
            }
        }
