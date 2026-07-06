import { useNavigate } from "react-router-dom";
import "../styles/progress.css";

function ProgressTracker({ current }) {

    const navigate = useNavigate();

    const steps = [

        {
            title:"Upload",
            path:"/upload"
        },

        {
            title:"Target",
            path:"/career-target"
        },

        {
            title:"ATS",
            path:"/ats-report"
        },

        {
            title:"Roadmap",
            path:"/roadmap"
        },

        {
            title:"Interview",
            path:"/interview"
        },

        {
            title:"Report",
            path:"/final-report"
        }

    ];

    return(

        <div className="progress-wrapper">

            {

                steps.map((step,index)=>(

                    <div
                        key={index}
                        className="progress-step-wrapper"
                    >

                        <div

                            className={

                                index<current
                                ?

                                "progress-step done"

                                :

                                index===current

                                ?

                                "progress-step active"

                                :

                                "progress-step"

                            }

                            onClick={()=>{

                                if(index<=current){

                                    navigate(step.path);

                                }

                            }}

                            style={{

                                cursor:index<=current

                                ?

                                "pointer"

                                :

                                "not-allowed"

                            }}

                        >

                            {

                                index+1

                            }

                        </div>

                        <span>

                            {step.title}

                        </span>

                        {

                            index!==steps.length-1 && (

                                <div

                                    className={

                                        index<current

                                        ?

                                        "progress-line done"

                                        :

                                        "progress-line"

                                    }

                                />

                            )

                        }

                    </div>

                ))

            }

        </div>

    );

}

export default ProgressTracker;