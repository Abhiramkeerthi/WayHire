from collections import defaultdict


class EvidenceEngine:

    def build(self, analyzer_results):

        evidence = defaultdict(list)

        for result in analyzer_results:

            if not result.accessible:

                continue

            platform = result.platform

            for item in result.evidence:

                evidence[item].append(platform)

        return dict(evidence)