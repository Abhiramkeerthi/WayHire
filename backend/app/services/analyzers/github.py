from collections import Counter

from app.schemas.analyzer_result import AnalyzerResult
from app.services.http_service import get_json
from app.services.github_repository_service import analyze_repositories

from .base import BaseAnalyzer


class GitHubAnalyzer(BaseAnalyzer):

    def supports(self, url):

        return "github.com" in url.lower()

    def analyze(self, url):

        username = url.rstrip("/").split("/")[-1]

        profile = get_json(
            f"https://api.github.com/users/{username}"
        )

        if not profile:

            return AnalyzerResult(

                platform="github",

                accessible=False,

                score=0,

                confidence=0,

                facts={},

                warnings=["GitHub profile not found."],

                evidence=[]

            )

        repos = get_json(
            f"https://api.github.com/users/{username}/repos"
        ) or []

        language_counter = Counter()

        total_stars = 0

        total_forks = 0

        repo_names = []

        for repo in repos:

            repo_names.append(
                repo.get("name")
            )

            if repo.get("language"):

                language_counter[
                    repo["language"]
                ] += 1

            total_stars += repo.get(
                "stargazers_count",
                0
            )

            total_forks += repo.get(
                "forks_count",
                0
            )

        warnings = []

        if len(repos) == 0:

            warnings.append(
                "No public repositories found."
            )

        score = 100

        score -= len(warnings) * 10

        score = max(score, 0)

        evidence = []

        if repos:

            evidence.append(
                f"{len(repos)} public repositories"
            )

        if total_stars:

            evidence.append(
                f"{total_stars} GitHub stars"
            )

        if language_counter:

            evidence.append(
                "Languages detected"
            )

        return AnalyzerResult(

            platform="github",

            accessible=True,

            score=score,

            confidence=95,

            facts={

                "username": profile.get("login"),

                "name": profile.get("name"),

                "followers": profile.get("followers"),

                "following": profile.get("following"),

                "public_repos": profile.get("public_repos"),

                "bio": profile.get("bio"),

                "company": profile.get("company"),

                "location": profile.get("location"),

                "created_at": profile.get("created_at"),

                "languages": dict(language_counter),

                "repository_analysis": analyze_repositories(repos),

                "total_stars": total_stars,

                "total_forks": total_forks

            },

            warnings=warnings,

            evidence=evidence

        )