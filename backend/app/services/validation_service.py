import re


def validate_resume(text: str):

    errors = []

    warnings = []

    if not text or len(text.strip()) < 100:

        errors.append(
            "Resume contains insufficient readable text."
        )

    email_pattern = r"[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}"

    if not re.search(email_pattern, text):

        warnings.append(
            "No email address detected."
        )

    phone_pattern = r"(\+?\d[\d\s\-]{8,}\d)"

    if not re.search(phone_pattern, text):

        warnings.append(
            "No phone number detected."
        )

    return {

        "valid": len(errors) == 0,

        "errors": errors,

        "warnings": warnings

    }