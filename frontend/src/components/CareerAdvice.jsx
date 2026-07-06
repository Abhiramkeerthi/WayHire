import "../styles/finalreport.css";

import {
    Bot,
    Sparkles,
    Briefcase,
    GraduationCap,
    Rocket,
} from "lucide-react";

function CareerAdvice(){

    return(

        <div className="career-advice">

            <div className="advice-header">

                <div className="advisor-avatar">

                    <Bot size={36}/>

                </div>

                <div>

                    <h2>

                        AI Career Coach

                    </h2>

                    <span>

                        Personalized Recommendation

                    </span>

                </div>

            </div>

            <div className="advice-message">

                <Sparkles size={22}/>

                <p>

                    Based on your resume, ATS analysis and interview
                    performance, you are close to being ready for
                    entry-level opportunities in your chosen field.

                    Before applying, strengthen your role-specific
                    knowledge, improve practical experience and
                    continue practicing interviews.

                    Your communication is already one of your
                    strongest qualities.

                </p>

            </div>

            <div className="advice-grid">

                <div className="advice-box">

                    <Briefcase size={22}/>

                    <h3>

                        Recommended Roles

                    </h3>

                    <p>

                        Entry-Level • Associate • Graduate Programs

                    </p>

                </div>

                <div className="advice-box">

                    <GraduationCap size={22}/>

                    <h3>

                        Next Learning Goal

                    </h3>

                    <p>

                        Focus on strengthening your missing skills
                        through practical projects.

                    </p>

                </div>

                <div className="advice-box">

                    <Rocket size={22}/>

                    <h3>

                        Application Readiness

                    </h3>

                    <p>

                        You're almost ready to begin applying after
                        addressing the highlighted improvements.

                    </p>

                </div>

            </div>

        </div>

    );

}

export default CareerAdvice;