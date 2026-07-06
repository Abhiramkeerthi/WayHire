import "../styles/ats.css";

import {
  Target,
  Briefcase,
  Building2,
  FileText,
} from "lucide-react";

import { useCareer } from "../context/CareerContext";

function AnalysisTarget() {

  const { careerData } = useCareer();

  const role = careerData.role || "Not Selected";
  const company = careerData.company || "Industry Standard";
  const usingJD = careerData.jobDescription.trim() !== "";

  return (
    <div className="analysis-target">

      <div className="analysis-header">
        <Target size={24} />
        <h2>Analysis Target</h2>
      </div>

      <div className="analysis-grid">

        <div className="analysis-item">
          <Briefcase size={20} />

          <div>
            <span>Target Role</span>
            <h3>{role}</h3>
          </div>

        </div>

        <div className="analysis-item">

          <Building2 size={20} />

          <div>
            <span>Target Company</span>
            <h3>{company}</h3>
          </div>

        </div>

        <div className="analysis-item">

          <FileText size={20} />

          <div>
            <span>Reference</span>

            <h3>
              {usingJD
                ? "Job Description"
                : "Industry Standards"}
            </h3>

          </div>

        </div>

      </div>

    </div>
  );
}

export default AnalysisTarget;