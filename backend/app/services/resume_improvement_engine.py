class ResumeImprovementEngine:

    def generate(
        self,
        ats,
        validation,
        job_match
    ):

        improvements = []

        for warning in validation.get("warnings", []):

            improvements.append({

                "category": "Validation",

                "priority": "High",

                "issue": warning

            })

        for warning in ats.get("warnings", []):

            improvements.append({

                "category": "ATS",

                "priority": "Medium",

                "issue": warning

            })

        for skill in job_match.get(

            "missing_skills",

            []

        ):

            improvements.append({

                "category": "Skill Gap",

                "priority": "High",

                "issue": f"Learn {skill}"

            })

        return improvements