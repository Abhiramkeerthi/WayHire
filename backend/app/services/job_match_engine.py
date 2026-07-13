class JobMatchEngine:

    def calculate(
        self,
        candidate_skills,
        required_skills
    ):

        candidate = {

            skill.lower()

            for skill in candidate_skills

        }

        required = {

            skill.lower()

            for skill in required_skills

        }

        matched = list(

            candidate & required

        )

        missing = list(

            required - candidate

        )

        if len(required) == 0:

            score = 100

        else:

            score = int(

                len(matched)

                / len(required)

                * 100

            )

        return {

            "score": score,

            "matched_skills": sorted(matched),

            "missing_skills": sorted(missing)

        }