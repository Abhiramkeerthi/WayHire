def run_rules(resume):

    score = 100

    warnings = []

    penalties = []

    if not resume.get("email"):

        score -= 5

        penalties.append("Email missing")

    if not resume.get("phone"):

        score -= 5

        penalties.append("Phone number missing")

    if len(resume.get("projects", [])) == 0:

        score -= 15

        penalties.append("No projects found")

    if len(resume.get("skills", [])) < 5:

        score -= 10

        penalties.append("Very few skills detected")

    if not resume.get("github"):

        warnings.append("GitHub profile not found")

    if not resume.get("linkedin"):

        warnings.append("LinkedIn profile not found")

    return {

        "rule_score": max(score, 0),

        "warnings": warnings,

        "penalties": penalties

    }