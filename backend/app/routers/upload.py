from fastapi import APIRouter, UploadFile, File, HTTPException

from app.services.parser import (
    save_resume,
    extract_pdf_text
)

from app.services.gemini_service import ask_gemini

router = APIRouter(
    prefix="/upload",
    tags=["Resume Upload"]
)


@router.get("/")
def upload_status():

    return {
        "message": "Resume Upload API is ready 🚀"
    }


@router.post("/")
async def upload_resume(file: UploadFile = File(...)):

    if not file.filename.endswith(".pdf"):

        raise HTTPException(
            status_code=400,
            detail="Only PDF resumes are supported for now."
        )

    file_path = await save_resume(file)

    resume_text = extract_pdf_text(file_path)

    analysis = ask_gemini(
        "ats_prompt.txt",
        resume_text
    )

    return analysis