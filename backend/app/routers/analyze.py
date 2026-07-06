from fastapi import APIRouter, UploadFile, File, Form, HTTPException

from app.services.parser import save_resume, extract_pdf_text
from app.services.analysis_service import analyze_candidate

router = APIRouter(
    prefix="/analyze",
    tags=["Resume Analysis"]
)


@router.post("/")
async def analyze_resume(

    file: UploadFile = File(...),

    target_role: str = Form(...),

    company: str = Form(""),

    job_description: str = Form("")

):

    if not file.filename.lower().endswith(".pdf"):

        raise HTTPException(
            status_code=400,
            detail="Only PDF resumes are currently supported."
        )

    file_path = await save_resume(file)

    resume_text = extract_pdf_text(file_path)

    result = analyze_candidate(

        resume_text=resume_text,

        target_role=target_role,

        company=company,

        job_description=job_description

    )

    return result