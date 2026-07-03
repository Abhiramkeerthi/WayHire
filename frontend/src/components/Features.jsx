import "../styles/features.css";

import {
  FileText,
  Route,
  Bot,
  Building2,
} from "lucide-react";

function Features() {
  return (
    <section className="features">

      <p className="section-tag">
        WHY WAYHIRE?
      </p>

      <h2>
        Everything you need to crack your next opportunity.
      </h2>

      <div className="feature-grid">

        <div className="card">

          <FileText
            size={38}
            className="feature-icon"
          />

          <h3>Resume Analysis</h3>

          <p>
            Get ATS scores, keyword analysis,
            missing skills and actionable
            improvements.
          </p>

        </div>

        <div className="card">

          <Route
            size={38}
            className="feature-icon"
          />

          <h3>Career Roadmap</h3>

          <p>
            Receive a personalized roadmap
            based on your dream role and
            current skill level.
          </p>

        </div>

        <div className="card">

          <Bot
            size={38}
            className="feature-icon"
          />

          <h3>AI Interview</h3>

          <p>
            Practice technical and HR
            interviews with instant AI
            feedback.
          </p>

        </div>

        <div className="card">

          <Building2
            size={38}
            className="feature-icon"
          />

          <h3>Recruitment Simulator</h3>

          <p>
            Experience the complete hiring
            process before facing the real
            interview.
          </p>

        </div>

      </div>

    </section>
  );
}

export default Features;