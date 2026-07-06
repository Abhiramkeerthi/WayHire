import "../styles/finalreport.css";

import {
    Trophy,
    FileText,
    MessageSquare,
    BadgeCheck,
    Mic,
} from "lucide-react";

function CareerSummary(){

    return(

        <>

            <div className="report-hero">

                <div className="hero-icon">

                    <Trophy size={42}/>

                </div>

                <h1>

                    Career Readiness Report

                </h1>

                <p>

                    Here's your complete AI evaluation based on
                    your resume, ATS compatibility and interview
                    performance.

                </p>

            </div>

            <div className="overall-score">

                <div className="score-circle">

                    <span>

                        91%

                    </span>

                </div>

                <h2>

                    Excellent Candidate

                </h2>

                <p>

                    Your profile is highly competitive for your
                    selected opportunity. Continue improving the
                    highlighted skills to maximize your chances.

                </p>

            </div>

            <div className="report-grid">

                <div className="report-card">

                    <FileText size={28}/>

                    <span>Resume Score</span>

                    <h3>89%</h3>

                </div>

                <div className="report-card">

                    <BadgeCheck size={28}/>

                    <span>ATS Match</span>

                    <h3>90%</h3>

                </div>

                <div className="report-card">

                    <MessageSquare size={28}/>

                    <span>Interview</span>

                    <h3>93%</h3>

                </div>

                <div className="report-card">

                    <Mic size={28}/>

                    <span>Communication</span>

                    <h3>95%</h3>

                </div>

            </div>

        </>

    );

}

export default CareerSummary;