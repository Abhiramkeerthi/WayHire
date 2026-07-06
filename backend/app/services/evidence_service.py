from collections import defaultdict


class EvidenceEngine:

    def __init__(self):

        self.evidence = defaultdict(list)

    def add(self, packet):

        key = (packet.type, packet.name.lower())

        self.evidence[key].append(packet)

    def summarize(self):

        summary = {}

        for key, packets in self.evidence.items():

            summary[key[1]] = {

                "type": key[0],

                "confidence": max(
                    p.confidence for p in packets
                ),

                "sources": [
                    p.source for p in packets
                ],

                "metadata": [
                    p.metadata for p in packets
                ]
            }

        return summary