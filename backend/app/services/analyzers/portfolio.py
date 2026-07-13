import requests
from bs4 import BeautifulSoup

from .base import BaseAnalyzer


class PortfolioAnalyzer(BaseAnalyzer):

    def supports(self, url):

        url = url.lower()

        return any(

            domain in url

            for domain in [

                "github.io",

                "vercel.app",

                "netlify.app",

                ".me",

                ".dev",

                ".portfolio"

            ]

        )

    def analyze(self, url):

        try:

            response = requests.get(

                url,

                timeout=10,

                headers={

                    "User-Agent": "WayHire AI"

                }

            )

            soup = BeautifulSoup(

                response.text,

                "html.parser"

            )

            text = soup.get_text(

                separator=" ",

                strip=True

            ).lower()

            facts = {

                "url": url,

                "title": soup.title.string if soup.title else "",

                "https": url.startswith("https"),

                "status_code": response.status_code,

                "has_about": "about" in text,

                "has_projects": "project" in text,

                "has_contact": "contact" in text,

                "has_resume": "resume" in text,

                "word_count": len(text.split())

            }

            warnings = []

            if not facts["has_projects"]:

                warnings.append("Projects section not found.")

            if not facts["has_contact"]:

                warnings.append("Contact section not found.")

            score = max(100 - len(warnings) * 10, 0)

            return {

                "platform": "portfolio",

                "accessible": True,

                "score": score,

                "confidence": 95,

                "facts": facts,

                "warnings": warnings,

                "evidence": [

                    key.replace("_", " ").title()

                    for key, value in facts.items()

                    if value is True

                ]

            }

        except Exception as e:

            return {

                "platform": "portfolio",

                "accessible": False,

                "score": 0,

                "confidence": 0,

                "facts": {},

                "warnings": [str(e)],

                "evidence": []

            }