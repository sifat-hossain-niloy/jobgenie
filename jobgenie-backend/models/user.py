from pydantic import BaseModel, Field
from typing import Optional

class User(BaseModel):
    username: str = Field(..., example="johndoe")
    email: str = Field(..., example="johndoe@example.com")
    full_name: Optional[str] = Field(None, example="John Doe")
    disabled: Optional[bool] = None

    class Config:
        orm_mode = True
        schema_extra = {
            "example": {
                "username": "johndoe",
                "email": "johndoe@example.com",
                "full_name": "John Doe",
                "disabled": False
            }
        }