from collections import Counter


FRAMEWORKS = {

    "FastAPI": [
        "fastapi"
    ],

    "Flask": [
        "flask"
    ],

    "Django": [
        "django"
    ],

    "React": [
        "react"
    ],

    "Next.js": [
        "next"
    ],

    "Angular": [
        "angular"
    ],

    "Vue": [
        "vue"
    ],

    "Spring Boot": [
        "spring"
    ],

    "TensorFlow": [
        "tensorflow"
    ],

    "PyTorch": [
        "torch"
    ],

    "Docker": [
        "docker"
    ],

    "Kubernetes": [
        "kubernetes",
        "k8s"
    ],

    "MongoDB": [
        "mongodb"
    ],

    "PostgreSQL": [
        "postgresql",
        "postgres"
    ],

    "MySQL": [
        "mysql"
    ]
}


def detect_frameworks(repositories):

    detected = Counter()

    for repo in repositories:

        text = " ".join(

            [

                repo.get("name", ""),

                repo.get("description") or "",

                " ".join(repo.get("topics", []))

            ]

        ).lower()

        for framework, keywords in FRAMEWORKS.items():

            if any(

                keyword in text

                for keyword in keywords

            ):

                detected[framework] += 1

    return dict(detected)


def analyze_repositories(repositories):

    if not repositories:

        return {

            "total_repositories": 0,

            "frameworks": {},

            "languages": {},

            "original_projects": 0,

            "forked_projects": 0,

            "stars": 0,

            "forks": 0

        }

    languages = Counter()

    original = 0

    forked = 0

    stars = 0

    forks = 0

    for repo in repositories:

        if repo.get("language"):

            languages[

                repo["language"]

            ] += 1

        if repo.get("fork"):

            forked += 1

        else:

            original += 1

        stars += repo.get(

            "stargazers_count",

            0

        )

        forks += repo.get(

            "forks_count",

            0

        )

    return {

        "total_repositories": len(repositories),

        "frameworks": detect_frameworks(repositories),

        "languages": dict(languages),

        "original_projects": original,

        "forked_projects": forked,

        "stars": stars,

        "forks": forks

    }