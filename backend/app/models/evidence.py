from pydantic import BaseModel, Field
from typing import Dict, Any


class EvidencePacket(BaseModel):

    source: str

    type: str

    name: str

    confidence: int

    metadata: Dict[str, Any] = Field(default_factory=dict)