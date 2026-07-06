def calculate_score(

    rule_score,

    ai_score,

    evidence

):

    evidence_bonus = 0

    verified = 0

    total = 0

    for category in evidence.values():

        for item in category.values():

            total += 1

            if item["confidence"] >= 90:

                verified += 1

    if total > 0:

        evidence_bonus = (

            verified / total

        ) * 10

    final_score = (

        rule_score * 0.45 +

        ai_score * 0.45 +

        evidence_bonus

    )

    return round(min(final_score,100),2)