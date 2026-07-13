import json
from app.services.job_match_engine import JobMatchEngine
from app.services.profile_service import build_candidate_profile
from app.services.validation_service import validate_resume
from app.services.extraction_service import extract_basic_information
from app.services.link_router import analyze_links
from app.services.skill_verification_service import verify_skills
from app.services.rule_engine import run_rules
from app.services.gemini_service import ask_gemini
from app.services.evidence.engine import EvidenceEngine
from app.services.ats_engine import ATSEngine
from app.services.resume_improvement_engine import ResumeImprovementEngine

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

    # Analyze all links (GitHub, Portfolio, etc.)
    link_analysis = analyze_links(
        basic["links"]
    )

    # Evidence Engine
    evidence = EvidenceEngine().build(
        link_analysis
    )

    # Skill Verification
    skill_verification = verify_skills(
        profile.resume["skills"],
        link_analysis
    )

    # Rule Engine
    rules = run_rules(
        profile.resume
    )

    ats = ATSEngine().calculate(
    profile,
    validation
    )

    job_match = JobMatchEngine().calculate(

    profile.resume["skills"],

    basic.get("keywords", []))

    improvements = ResumeImprovementEngine().generate(

    ats,

    validation,

    job_match)



    # Payload for Gemini
    payload = {

        "candidate": profile.model_dump(),

        "validation": validation,

        "basic_information": basic,

        "link_analysis": link_analysis,

        "skill_verification": skill_verification,

        "rule_engine": rules,

        "target_role": target_role,

        "company": company,

        "job_description": job_description,

        "evidence": evidence,

        "ats": ats,

        "job_match": job_match,

        "improvements": improvements,

    }

    ai_report = ask_gemini(

        "master_analysis_prompt.txt",

        json.dumps(payload, indent=2)

    )

    return {

        "candidate": profile.model_dump(),

        "validation": validation,

        "basic_information": basic,

        "link_analysis": link_analysis,

        "skill_verification": skill_verification,

        "rule_engine": rules,

        "analysis": ai_report,

        "evidence": evidence,

        "job_match": job_match,

        "improvements": improvements,

    }