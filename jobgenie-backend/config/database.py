from dotenv import load_dotenv
import os
from pymongo import MongoClient

load_dotenv()

# Print to verify MONGO_URI is loaded correctly
print(f"MONGO_URI: {os.getenv('MONGO_URI')}")

# Ensure MongoDB URI is present
mongo_uri = os.getenv("MONGO_URI")
if not mongo_uri:
    raise Exception("MONGO_URI not found in environment variables")

try:
    # Establish a connection to the MongoDB server
    client = MongoClient(mongo_uri)
    print("MongoDB connection successful.")
except Exception as e:
    print(f"Error connecting to MongoDB: {e}")
    raise

# Access the specific MongoDB database
db = client.jobgenie_db

# Access collections
users_collection = db["users"]
user_data_collection = db["user_data"]

# Create unique indexes
users_collection.create_index("username", unique=True)
users_collection.create_index("email", unique=True)

user_data_collection.create_index("userId", unique=True)
user_data_collection.create_index("email", unique=True)
