from app.services.analyzers.github import GitHubAnalyzer


github = GitHubAnalyzer()


def analyze_links(links):

    results = []

    for link in links:

        if github.supports(link):

            results.append(

                github.analyze(link)

            )

    return results