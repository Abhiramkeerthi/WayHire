def verify_skills(resume_skills, github_analysis):

    verification = {}

    github_skills = []

    if github_analysis:

        for result in github_analysis:

            if not result.get("accessible"):
                continue

            facts = result.get("facts", {})

            repository_analysis = facts.get(
                "repository_analysis",
                {}
            )

            github_skills.extend(
                repository_analysis.get(
                    "detected_skills",
                    []
                )
            )

    github_skills = {
        skill.lower()
        for skill in github_skills
    }

    for skill in resume_skills:

        confidence = 60

        verified = False

        if skill.lower() in github_skills:

            confidence = 95

            verified = True

        verification[skill] = {

            "verified": verified,

            "confidence": confidence,

            "sources": [

                "Resume"

            ] + (

                ["GitHub"]

                if verified else []

            )

        }

    return verification