from app.models.master_report import MasterReport


def build_master_report(

    candidate,

    validation,

    evidence,

    github,

    scoring,

    ai_analysis

):

    return MasterReport(

        candidate=candidate,

        validation=validation,

        evidence=evidence,

        github=github,

        scoring=scoring,

        ai_analysis=ai_analysis,

        recommendations=[]

    )