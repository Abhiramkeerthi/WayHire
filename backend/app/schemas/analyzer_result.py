from pydantic import BaseModel
from typing import Any


class AnalyzerResult(BaseModel):

    platform: str

    accessible: bool

    score: int

    confidence: int

    facts: dict[str, Any]

    warnings: list[str]

    evidence: list[str]