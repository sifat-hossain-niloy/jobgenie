from fastapi import FastAPI
from routes.user_route import user_router

app = FastAPI()

app.include_router(user_router)