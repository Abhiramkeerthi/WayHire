import Layout from "../components/Layout";
import ProgressTracker from "../components/ProgressTracker";
import UploadBox from "../components/UploadBox";

import "../styles/upload.css";

import {
  BadgeCheck,
  FileSearch,
  Route,
  Bot,
} from "lucide-react";

function UploadResume() {
  return (
    <Layout>
      <ProgressTracker current={0} />

      <div className="upload-page">

        <h1>Upload Your Resume</h1>

        <p>
          Kickstart your AI-powered recruitment journey with
          <strong> WayHire.</strong>
        </p>

        <UploadBox />

        <div className="upload-info">

          <div className="info-card">
            <BadgeCheck size={36} />

            <h3>ATS Score</h3>

            <p>
              Instantly evaluate your resume against
              modern Applicant Tracking Systems and
              improve your chances of getting shortlisted.
            </p>
          </div>

          <div className="info-card">
            <FileSearch size={36} />

            <h3>Resume Review</h3>

            <p>
              Receive AI-powered feedback, keyword analysis,
              formatting suggestions and improvement tips.
            </p>
          </div>

          <div className="info-card">
            <Route size={36} />

            <h3>Career Roadmap</h3>

            <p>
              Get a personalized roadmap based on your
              resume, experience and dream job.
            </p>
          </div>

          <div className="info-card">
            <Bot size={36} />

            <h3>AI Interview</h3>

            <p>
              Practice HR and technical interviews with
              intelligent AI feedback before real interviews.
            </p>
          </div>

        </div>

      </div>
    </Layout>
  );
}

export default UploadResume;