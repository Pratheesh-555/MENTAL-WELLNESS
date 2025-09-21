from fastapi import FastAPI, UploadFile, File, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import uvicorn
import logging
import bcrypt
import os
from pymongo import MongoClient

# === SETUP ===
app = FastAPI()
logging.basicConfig(level=logging.INFO)

# === CORS ===
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:3000",
        "https://mental-wellness-xi.vercel.app",
        "https://mental-wellness-lsihyz5sy-sai-tejas-projects-2a2e36c4.vercel.app"
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# === MONGODB CONNECTION ===
MONGODB_URL = os.getenv("MONGODB_URL", "mongodb://localhost:27017/")
client = MongoClient(MONGODB_URL)
db = client["mental_wellness"]
users_collection = db["users"]

# === MODELS ===
class UserIn(BaseModel):
    username: str
    password: str

# === AUTH ROUTES ===
@app.post("/register")
def register(user: UserIn):
    if users_collection.find_one({"username": user.username}):
        raise HTTPException(status_code=400, detail="Username already exists")

    hashed_pw = bcrypt.hashpw(user.password.encode('utf-8'), bcrypt.gensalt())
    users_collection.insert_one({
        "username": user.username,
        "password": hashed_pw.decode()
    })
    return {"message": "User registered successfully"}

@app.post("/login")
def login(user: UserIn):
    db_user = users_collection.find_one({"username": user.username})
    if not db_user or not bcrypt.checkpw(user.password.encode('utf-8'), db_user["password"].encode()):
        raise HTTPException(status_code=401, detail="Invalid credentials")

    return {"message": "Login successful"}

# === EMOTION DETECTION ROUTE (SIMPLIFIED) ===
@app.post("/analyze_emotion/")
async def analyze_emotion(file: UploadFile = File(...)):
    try:
        contents = await file.read()
        
        # For now, return a mock response since DeepFace isn't installed
        # You can add actual emotion detection later
        logging.info("Image received for analysis (mock response)")
        
        # Mock emotion analysis
        import random
        emotions = ["happy", "sad", "angry", "neutral", "surprised", "fearful"]
        stress_levels = ["Low", "Medium", "High"]
        
        emotion = random.choice(emotions)
        stress_level = random.choice(stress_levels)

        return {"emotion": emotion, "stress_level": stress_level, "note": "Mock response - install DeepFace for real analysis"}

    except Exception as e:
        logging.error(f"Error processing image: {str(e)}")
        return {"error": str(e)}

if __name__ == "__main__":
    port = int(os.environ.get("PORT", 8000))  # Use Railway's PORT env variable
    uvicorn.run("main:app", host="0.0.0.0", port=port, reload=False)
