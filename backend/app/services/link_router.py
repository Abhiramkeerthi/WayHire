from app.services.analyzers.github import GitHubAnalyzer
from app.services.analyzers.portfolio import PortfolioAnalyzer

ANALYZERS = [
    GitHubAnalyzer(),
    PortfolioAnalyzer(),
]


def analyze_links(links):

    results = []

    for link in links:

        for analyzer in ANALYZERS:

            if analyzer.supports(link):

                try:

                    results.append(
                        analyzer.analyze(link)
                    )

                except Exception as e:

                    results.append(
                        {
                            "platform": analyzer.__class__.__name__,
                            "accessible": False,
                            "error": str(e)
                        }
                    )

                break

    return results