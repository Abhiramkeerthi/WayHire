class ATSEngine:

    def calculate(self, profile, validation):

        breakdown = {
            "formatting": 20,
            "sections": 20,
            "skills": 20,
            "projects": 20,
            "readability": 20
        }

        warnings = []

        resume = profile.resume

        if not resume.get("skills"):
            breakdown["skills"] -= 10
            warnings.append("No skills section detected.")

        if not resume.get("projects"):
            breakdown["projects"] -= 10
            warnings.append("No projects detected.")

        if not resume.get("education"):
            breakdown["sections"] -= 5
            warnings.append("Education section missing.")

        if validation.get("warnings"):
            breakdown["formatting"] -= min(
                10,
                len(validation["warnings"]) * 2
            )

        overall = sum(breakdown.values())

        return {
            "overall_score": overall,
            "breakdown": breakdown,
            "warnings": warnings
        }