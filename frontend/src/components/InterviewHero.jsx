import "../styles/interview.css";

import {
  Briefcase,
  Building2,
 Clock3,
  Target,
} from "lucide-react";

import { useCareer } from "../context/CareerContext";

function InterviewHero() {

  const { careerData } = useCareer();

  return (

    <div className="interview-hero">

      <h1>AI Mock Interview</h1>

      <p>

        Practice interview questions personalized
        for your target opportunity.

      </p>

      <div className="interview-summary">

        <div className="summary-box">

          <Briefcase size={22}/>

          <div>

            <span>Role</span>

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

              {careerData.company || "Industry Standard"}

            </h3>

          </div>

        </div>

        <div className="summary-box">

          <Target size={22}/>

          <div>

            <span>Difficulty</span>

            <h3>

              Intermediate

            </h3>

          </div>

        </div>

        <div className="summary-box">

          <Clock3 size={22}/>

          <div>

            <span>Estimated Time</span>

            <h3>

              20 Minutes

            </h3>

          </div>

        </div>

      </div>

    </div>

  );

}

export default InterviewHero;