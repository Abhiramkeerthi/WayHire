import os
import fitz
from fastapi import UploadFile

UPLOAD_FOLDER = "app/uploads"


async def save_resume(file: UploadFile):

    os.makedirs(UPLOAD_FOLDER, exist_ok=True)

    file_path = os.path.join(
        UPLOAD_FOLDER,
        file.filename
    )

    with open(file_path, "wb") as buffer:

        buffer.write(await file.read())

    return file_path


def extract_pdf_text(file_path: str):

    document = fitz.open(file_path)

    text = ""

    for page in document:

        text += page.get_text()

    document.close()

    return text