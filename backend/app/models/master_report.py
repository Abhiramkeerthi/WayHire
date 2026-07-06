from pydantic import BaseModel, Field
from typing import Dict, List, Any


class MasterReport(BaseModel):

    candidate: Dict[str, Any] = Field(default_factory=dict)

    validation: Dict[str, Any] = Field(default_factory=dict)

    evidence: Dict[str, Any] = Field(default_factory=dict)

    github: Dict[str, Any] = Field(default_factory=dict)

    scoring: Dict[str, Any] = Field(default_factory=dict)

    ai_analysis: Dict[str, Any] = Field(default_factory=dict)

    recommendations: List[str] = Field(default_factory=list)