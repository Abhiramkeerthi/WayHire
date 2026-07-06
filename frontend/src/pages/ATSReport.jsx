import Layout from "../components/Layout";
import ProgressTracker from "../components/ProgressTracker";

import AnalysisTarget from "../components/AnalysisTarget";
import ATSScore from "../components/ATSScore";
import KeywordSection from "../components/KeywordSection";
import ATSBreakdown from "../components/ATSBreakdown";
import Suggestions from "../components/Suggestions";

import "../styles/ats.css";

function ATSReport() {
  return (
    <Layout>

      <ProgressTracker current={1} />

      <div className="ats-page">

        <div className="ats-header">

          <h1>Resume Match Report</h1>

          <p>
            Here's how your resume matches your target
            role, company and hiring expectations.
          </p>

        </div>

        <AnalysisTarget />

        <ATSScore />

        <KeywordSection />

        <ATSBreakdown />

        <Suggestions />

      </div>

    </Layout>
  );
}

export default ATSReport;