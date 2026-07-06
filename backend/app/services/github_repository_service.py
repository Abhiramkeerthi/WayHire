from collections import Counter


TECH_KEYWORDS = {
    "Python",
    "Java",
    "JavaScript",
    "TypeScript",
    "React",
    "Angular",
    "Vue",
    "Node.js",
    "Express",
    "FastAPI",
    "Flask",
    "Django",
    "Spring",
    "C",
    "C++",
    "C#",
    "Go",
    "Rust",
    "PHP",
    "HTML",
    "CSS",
    "SQL",
    "MongoDB",
    "PostgreSQL",
    "MySQL",
    "Docker",
    "Kubernetes",
    "AWS",
    "Azure",
    "Firebase",
    "TensorFlow",
    "PyTorch"
}


def analyze_repositories(repositories):

    languages = Counter()
    topics = Counter()

    total_stars = 0
    total_forks = 0

    deployed_projects = 0
    documented_projects = 0

    detected_skills = set()

    repo_summaries = []

    for repo in repositories:

        language = repo.get("language")

        if language:
            languages[language] += 1
            detected_skills.add(language)

        total_stars += repo.get("stargazers_count", 0)
        total_forks += repo.get("forks_count", 0)

        if repo.get("homepage"):
            deployed_projects += 1

        if repo.get("description"):
            documented_projects += 1

            description = repo["description"]

            for tech in TECH_KEYWORDS:

                if tech.lower() in description.lower():
                    detected_skills.add(tech)

        for topic in repo.get("topics", []):

            topics[topic] += 1

            for tech in TECH_KEYWORDS:

                if tech.lower() == topic.lower():
                    detected_skills.add(tech)

        repo_summaries.append({

            "name": repo.get("name"),

            "language": language,

            "stars": repo.get("stargazers_count", 0),

            "forks": repo.get("forks_count", 0),

            "homepage": repo.get("homepage"),

            "description": repo.get("description")

        })

    return {

        "languages": dict(languages),

        "topics": dict(topics),

        "repositories": repo_summaries,

        "total_stars": total_stars,

        "total_forks": total_forks,

        "deployed_projects": deployed_projects,

        "documented_projects": documented_projects,

        "detected_skills": sorted(list(detected_skills))

    }