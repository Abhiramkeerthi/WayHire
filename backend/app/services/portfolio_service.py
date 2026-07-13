import requests


def analyze_portfolio(url: str):

    if not url:

        return {
            "exists": False,
            "message": "No portfolio link found."
        }

    try:

        response = requests.get(
            url,
            timeout=10
        )

        html = response.text.lower()

        return {

            "exists": True,

            "status_code": response.status_code,

            "https": url.startswith("https"),

            "response_time": response.elapsed.total_seconds(),

            "has_about": "about" in html,

            "has_projects": "project" in html,

            "has_contact": "contact" in html,

            "has_resume": "resume" in html,

            "has_github": "github" in html,

            "has_linkedin": "linkedin" in html

        }

    except Exception as e:

        return {

            "exists": False,

            "error": str(e)

        }