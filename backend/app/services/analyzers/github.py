from collections import Counter

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

            return {

                "platform": "github",

                "accessible": False,

                "facts": {}
            }

        repos = get_json(
            f"https://api.github.com/users/{username}/repos"
        ) or []

        language_counter = Counter()

        total_stars = 0

        total_forks = 0

        repo_names = []

        for repo in repos:

            repo_names.append(repo.get("name"))

            if repo.get("language"):

                language_counter[repo["language"]] += 1

            total_stars += repo.get("stargazers_count", 0)

            total_forks += repo.get("forks_count", 0)

        return {

            "platform": "github",

            "accessible": True,

            "facts": {

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
            }

        }