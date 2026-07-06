import "../styles/ats.css";

import {
  CheckCircle2,
  XCircle,
} from "lucide-react";

function KeywordSection() {
  const foundKeywords = [
    "React",
    "Java",
    "Python",
    "SQL",
    "Git",
    "Machine Learning",
  ];

  const missingKeywords = [
    "Docker",
    "REST APIs",
    "CI/CD",
    "AWS",
    "Unit Testing",
    "Microservices",
  ];

  return (
    <div className="keywords-grid">

      <div className="keyword-card">

        <h2>Matched Keywords</h2>

        <div className="keyword-list">

          {foundKeywords.map((keyword) => (
            <div
              key={keyword}
              className="keyword success"
            >
              <CheckCircle2 size={18} />

              <span>{keyword}</span>
            </div>
          ))}

        </div>

      </div>

      <div className="keyword-card">

        <h2>Missing Keywords</h2>

        <div className="keyword-list">

          {missingKeywords.map((keyword) => (
            <div
              key={keyword}
              className="keyword danger"
            >
              <XCircle size={18} />

              <span>{keyword}</span>
            </div>
          ))}

        </div>

      </div>

    </div>
  );
}

export default KeywordSection;