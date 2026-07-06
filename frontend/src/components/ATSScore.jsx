import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import {
  CheckCircle2,
  AlertTriangle,
  ArrowRight,
  FilePenLine,
} from "lucide-react";

import "../styles/ats.css";

function ATSScore() {

  const targetScore = 87;

  const [score, setScore] = useState(0);

  useEffect(() => {

    let current = 0;

    const timer = setInterval(() => {

      current++;

      setScore(current);

      if(current >= targetScore){
        clearInterval(timer);
      }

    },18);

    return ()=>clearInterval(timer);

  },[]);

  const isReady = targetScore >= 80;
  const almostReady = targetScore >= 60 && targetScore < 80;

  return (

    <div className="score-card">

      <div className="summary-card">

        {isReady && (
          <>
            <CheckCircle2 size={34}/>
            <div>
              <h3>You're ready to apply!</h3>

              <p>
                Your resume matches the selected opportunity well.
                Continue to the roadmap or interview preparation to
                maximize your chances.
              </p>
            </div>
          </>
        )}

        {almostReady && (
          <>
            <AlertTriangle size={34}/>
            <div>
              <h3>You're almost there.</h3>

              <p>
                Your resume has good potential but improving the
                highlighted skills and keywords will increase
                your chances.
              </p>
            </div>
          </>
        )}

        {!isReady && !almostReady && (
          <>
            <AlertTriangle size={34}/>
            <div>
              <h3>Resume needs improvement.</h3>

              <p>
                We recommend improving your resume before applying.
                You can still continue to explore your personalized
                roadmap and interview preparation.
              </p>
            </div>
          </>
        )}

      </div>

      <h2>Overall Match Score</h2>

      <div className="score-circle">

        <span>{score}%</span>

      </div>

      <div className="readiness-badge">

        {isReady && "🟢 Career Ready"}

        {almostReady && "🟡 Almost Ready"}

        {!isReady && !almostReady && "🔴 Needs Improvement"}

      </div>

      <div className="score-buttons">

        <button className="improve-btn">

          <FilePenLine size={18}/>

          Improve Resume

        </button>

        <Link
          to="/roadmap"
          className="continue-roadmap"
        >

          Continue Anyway

          <ArrowRight size={18}/>

        </Link>

      </div>

    </div>

  );

}

export default ATSScore;