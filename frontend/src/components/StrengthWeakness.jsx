import "../styles/finalreport.css";

import {
    CheckCircle2,
    AlertTriangle,
    TrendingUp,
    Target,
} from "lucide-react";

function StrengthWeakness(){

    const strengths=[

        "Strong communication skills",

        "Well structured resume",

        "Relevant academic projects",

        "Good ATS compatibility",

        "Clear career direction"

    ];

    const improvements=[

        "Gain more practical experience",

        "Strengthen role-specific skills",

        "Quantify achievements",

        "Improve interview confidence",

        "Build another portfolio project"

    ];

    return(

        <div className="analysis-section">

            <div className="strength-card">

                <div className="analysis-title">

                    <TrendingUp size={24}/>

                    <h2>

                        Key Strengths

                    </h2>

                </div>

                {

                    strengths.map((item,index)=>(

                        <div
                            key={index}
                            className="analysis-item success-item"
                        >

                            <CheckCircle2 size={18}/>

                            <span>

                                {item}

                            </span>

                        </div>

                    ))

                }

            </div>

            <div className="weakness-card">

                <div className="analysis-title">

                    <Target size={24}/>

                    <h2>

                        Areas to Improve

                    </h2>

                </div>

                {

                    improvements.map((item,index)=>(

                        <div
                            key={index}
                            className="analysis-item warning-item"
                        >

                            <AlertTriangle size={18}/>

                            <span>

                                {item}

                            </span>

                        </div>

                    ))

                }

            </div>

        </div>

    );

}

export default StrengthWeakness;