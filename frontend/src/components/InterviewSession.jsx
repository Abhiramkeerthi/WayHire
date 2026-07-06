import { useState } from "react";

import "../styles/interview.css";

import {
    Bot,
    PlayCircle,
    Volume2,
    Mic,
    Loader2
} from "lucide-react";

function InterviewSession(){

    const [state,setState]=useState("intro");

    return(

        <div className="session-card">

            <div className="session-header">

                <div className="session-avatar">

                    <Bot size={40}/>

                </div>

                <div>

                    <h2>Sarah Williams</h2>

                    <span>
                        Senior Talent Acquisition Partner
                    </span>

                </div>

            </div>

            {

                state==="intro" && (

                    <>

                        <div className="session-box">

                            <p>

                                Hello Abhiram.

                                Welcome to today's interview.

                                I'll ask you questions based on your resume,
                                target role and company.

                                Answer naturally just like a real interview.

                            </p>

                        </div>

                        <button

                            className="session-btn"

                            onClick={()=>setState("speaking")}

                        >

                            <PlayCircle size={20}/>

                            Begin Interview

                        </button>

                    </>

                )

            }

            {

                state==="speaking" && (

                    <>

                        <div className="status">

                            <Volume2 size={22}/>

                            AI Speaking...

                        </div>

                        <div className="question-box">

                            Tell me about yourself.

                        </div>

                        <button

                            className="session-btn"

                            onClick={()=>setState("listening")}

                        >

                            <Mic size={20}/>

                            Start Speaking

                        </button>

                    </>

                )

            }

            {

                state==="listening" && (

                    <>

                        <div className="status">

                            <Mic size={22}/>

                            Listening...

                        </div>

                        <div className="voice-wave">

                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>

                        </div>

                        <button

                            className="session-btn"

                            onClick={()=>setState("thinking")}

                        >

                            Finish Answer

                        </button>

                    </>

                )

            }

            {

                state==="thinking" && (

                    <>

                        <div className="status">

                            <Loader2
                                size={22}
                                className="spinner"
                            />

                            AI is evaluating...

                        </div>

                        <div className="thinking-box">

                            Preparing your next interview question...

                        </div>

                    </>

                )

            }

        </div>

    );

}

export default InterviewSession;