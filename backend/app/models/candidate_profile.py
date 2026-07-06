from pydantic import BaseModel, Field
from typing import List, Dict, Optional


class CandidateProfile(BaseModel):

    identity: Dict = Field(default_factory=dict)

    online_presence: Dict = Field(default_factory=dict)

    resume: Dict = Field(default_factory=dict)

    validation: Dict = Field(default_factory=dict)

    evidence: Dict = Field(default_factory=dict)

    scores: Dict = Field(default_factory=dict)

    links: List[str] = Field(default_factory=list)