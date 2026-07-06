from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.routers import analyze

app = FastAPI(
    title="WayHire API",
    description="AI Recruitment Platform Backend",
    version="1.0.0"
)

origins = [
    "http://localhost:5173"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(analyze.router)


@app.get("/")
def root():

    return {
        "message": "Welcome to WayHire Backend 🚀"
    }


@app.get("/health")
def health():

    return {
        "status": "healthy",
        "backend": "running"
    }