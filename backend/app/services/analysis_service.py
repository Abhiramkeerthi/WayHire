import json

from app.services.profile_service import build_candidate_profile
from app.services.validation_service import validate_resume
from app.services.extraction_service import extract_basic_information
from app.services.link_router import analyze_links
from app.services.skill_verification_service import verify_skills
from app.services.rule_engine import run_rules
from app.services.gemini_service import ask_gemini


def analyze_candidate(
    resume_text: str,
    target_role: str,
    company: str = "",
    job_description: str = ""
):

    # Candidate Profile
    profile = build_candidate_profile(resume_text)

    # Validation
    validation = validate_resume(resume_text)

    # Basic Extraction
    basic = extract_basic_information(resume_text)

    # GitHub Analysis
    github_analysis = analyze_links(
        basic["links"]
    )

    # Skill Verification
    skill_verification = verify_skills(
        profile.resume["skills"],
        github_analysis
    )

    # Rule Engine
    rules = run_rules(
        profile.resume
    )

    # Everything goes to ONE AI call
    payload = {

        "candidate": profile.model_dump(),

        "validation": validation,

        "basic_information": basic,

        "github_analysis": github_analysis,

        "skill_verification": skill_verification,

        "rule_engine": rules,

        "target_role": target_role,

        "company": company,

        "job_description": job_description

    }

    ai_report = ask_gemini(

        "master_analysis_prompt.txt",

        json.dumps(payload, indent=2)

    )

    return {

        "candidate": profile.model_dump(),

        "validation": validation,

        "basic_information": basic,

        "github_analysis": github_analysis,

        "skill_verification": skill_verification,

        "rule_engine": rules,

        "analysis": ai_report

    }