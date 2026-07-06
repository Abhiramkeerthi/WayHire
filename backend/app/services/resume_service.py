from app.services.gemini_service import ask_gemini


def build_resume_object(resume_text):

    return ask_gemini(
        "resume_parser_prompt.txt",
        resume_text
    )