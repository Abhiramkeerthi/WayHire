import "../styles/ats.css";

import {
  Lightbulb,
  ArrowRight,
} from "lucide-react";

import { Link } from "react-router-dom";

function Suggestions() {
  const suggestions = [
    "Add measurable achievements using numbers and percentages.",
    "Include Docker and AWS to improve ATS compatibility.",
    "Mention REST APIs and backend technologies.",
    "Strengthen your professional summary with role-specific keywords.",
    "Add certifications or relevant online courses.",
  ];

  return (
    <div className="suggestions-card">

      <h2>
        <Lightbulb size={28} />
        AI Recommendations
      </h2>

      <div className="suggestion-list">

        {suggestions.map((item, index) => (
          <div
            className="suggestion"
            key={index}
          >
            <span className="bullet">✓</span>

            <p>{item}</p>
          </div>
        ))}

      </div>

      <Link
        to="/roadmap"
        className="roadmap-btn"
      >
        Generate Career Roadmap

        <ArrowRight size={18} />
      </Link>

    </div>
  );
}

export default Suggestions;