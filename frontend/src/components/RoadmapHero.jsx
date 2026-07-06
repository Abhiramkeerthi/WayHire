import "../styles/roadmap.css";

import { Target, Briefcase, Building2, TrendingUp } from "lucide-react";

import { useCareer } from "../context/CareerContext";

function RoadmapHero() {

  const { careerData } = useCareer();

  // Dummy for now.
  // Later comes from backend.
  const matchScore = 87;

  return (

    <div className="roadmap-hero">

      <div className="roadmap-title">

        <h1>Learning Roadmap</h1>

        <p>

          Your personalized journey to become a stronger
          candidate for your target opportunity.

        </p>

      </div>

      <div className="roadmap-summary">

        <div className="summary-box">

          <Briefcase size={22}/>

          <div>

            <span>Target Role</span>

            <h3>

              {careerData.role || "Not Selected"}

            </h3>

          </div>

        </div>

        <div className="summary-box">

          <Building2 size={22}/>

          <div>

            <span>Company</span>

            <h3>

              {careerData.company || "Industry Standards"}

            </h3>

          </div>

        </div>

        <div className="summary-box">

          <Target size={22}/>

          <div>

            <span>Reference</span>

            <h3>

              {

                careerData.jobDescription

                ?

                "Job Description"

                :

                "Industry Standards"

              }

            </h3>

          </div>

        </div>

        <div className="summary-box">

          <TrendingUp size={22}/>

          <div>

            <span>Current Match</span>

            <h3>

              {matchScore}%

            </h3>

          </div>

        </div>

      </div>

    </div>

  );

}

export default RoadmapHero;