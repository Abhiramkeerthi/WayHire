from app.services.http_service import get_json

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

                "platform":"github",

                "accessible":False,

                "facts":{}

            }

        repos = get_json(

            f"https://api.github.com/users/{username}/repos"

        )

        return {

            "platform":"github",

            "accessible":True,

            "facts":{

                "username":profile.get("login"),

                "name":profile.get("name"),

                "followers":profile.get("followers"),

                "following":profile.get("following"),

                "public_repos":profile.get("public_repos"),

                "bio":profile.get("bio"),

                "company":profile.get("company"),

                "location":profile.get("location"),

                "created_at":profile.get("created_at"),

                "repositories":repos or []

            }

        }