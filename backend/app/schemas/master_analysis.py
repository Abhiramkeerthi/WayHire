from pydantic import BaseModel


class ATS(BaseModel):

    overall_score: int

    formatting: int

    content: int

    skills: int

    projects: int

    strengths: list[str]

    weaknesses: list[str]


class JobMatch(BaseModel):

    score: int

    matched_skills: list[str]

    missing_skills: list[str]


class Recommendation(BaseModel):

    title: str

    reason: str

    priority: str

    impact: int


class MasterAnalysis(BaseModel):

    summary: str

    ats: ATS

    job_match: JobMatch

    recommendations: list[Recommendation]

    interview_questions: list[str]

    learning_roadmap: list[str]