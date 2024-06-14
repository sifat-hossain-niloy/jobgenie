from pydantic import BaseModel, Field
from typing import Optional

class User(BaseModel):
    username: str = Field(..., example="johndoe")
    email: str = Field(..., example="johndoe@example.com")
    password: str = Field(..., example="password123")

    class Config:
        orm_mode = True
        schema_extra = {
            "example": {
                "username": "johndoe",
                "email": "johndoe@example.com",
                "password": "password123"
            }
        }
