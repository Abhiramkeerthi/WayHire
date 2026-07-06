from app.models.candidate_profile import CandidateProfile
from app.services.resume_service import build_resume_object


def build_candidate_profile(resume_text):

    resume = build_resume_object(resume_text)

    profile = CandidateProfile(

        identity={

            "name":resume.get("name"),

            "email":resume.get("email"),

            "phone":resume.get("phone")

        },

        online_presence={

            "github":resume.get("github"),

            "linkedin":resume.get("linkedin"),

            "leetcode":resume.get("leetcode"),

            "portfolio":resume.get("portfolio"),

            "kaggle":resume.get("kaggle")

        },

        resume={

            "skills":resume.get("skills",[]),

            "projects":resume.get("projects",[]),

            "experience":resume.get("experience",[]),

            "education":resume.get("education",[]),

            "certifications":resume.get("certifications",[])

        },

        links=resume.get("links",[])

    )

    return profile