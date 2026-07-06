import { useState } from "react";
import "../styles/interview.css";

import {
  Clock3,
  Sparkles,
  Mic,
  Keyboard,
  ArrowRight,
  Lightbulb,
  BarChart3,
} from "lucide-react";

function InterviewQuestions() {

  const questions = [

    {
      question: "Tell me about yourself.",
      difficulty: "Easy",
      duration: "2 mins",
      hint: "Keep your answer professional, concise and relevant to the role."
    },

    {
      question: "Why do you want to join this company?",
      difficulty: "Medium",
      duration: "3 mins",
      hint: "Mention company values, your goals and how you fit."
    },

    {
      question: "Describe a challenging situation you solved.",
      difficulty: "Medium",
      duration: "3 mins",
      hint: "Use the STAR method while answering."
    },

    {
      question: "Where do you see yourself in five years?",
      difficulty: "Easy",
      duration: "2 mins",
      hint: "Show ambition while aligning with the company."
    }

  ];

  const [current, setCurrent] = useState(0);
  const [showHint, setShowHint] = useState(false);

  const progress =
    ((current + 1) / questions.length) * 100;

  const nextQuestion = () => {

    if (current < questions.length - 1) {

      setCurrent(current + 1);

      setShowHint(false);

    }

  };

  return (

    <div className="question-section">

      <div className="question-header">

        <div>

          <h2>

            AI Interview Question

          </h2>

          <span>

            Question {current + 1} of {questions.length}

          </span>

        </div>

        <div className="progress-pill">

          {Math.round(progress)}%

        </div>

      </div>

      <div className="question-progress">

        <div

          className="question-progress-fill"

          style={{

            width:`${progress}%`

          }}

        />

      </div>

      <div className="question-card">

        <div className="question-meta">

          <span>

            <Sparkles size={16}/>

            {questions[current].difficulty}

          </span>

          <span>

            <Clock3 size={16}/>

            {questions[current].duration}

          </span>

        </div>

        <h3>

          {questions[current].question}

        </h3>

        {

          showHint &&

          <div className="hint-box">

            <Lightbulb size={18}/>

            <span>

              {questions[current].hint}

            </span>

          </div>

        }

        <div className="action-buttons">

          <button className="record-btn">

            <Mic size={18}/>

            Record Answer

          </button>

          <button className="type-btn">

            <Keyboard size={18}/>

            Type Answer

          </button>

        </div>

        <div className="secondary-buttons">

          <button

            className="hint-btn"

            onClick={()=>

              setShowHint(!showHint)

            }

          >

            <Lightbulb size={16}/>

            {

              showHint

              ?

              "Hide Hint"

              :

              "Reveal AI Hint"

            }

          </button>

          <button

            className="next-btn"

            onClick={nextQuestion}

          >

            Next Question

            <ArrowRight size={18}/>

          </button>

        </div>

      </div>

      <div className="evaluation-card">

        <div className="section-heading">

          <BarChart3 size={22}/>

          <h2>

            AI Evaluation Criteria

          </h2>

        </div>

        <div className="evaluation-grid">

          <div>

            <h4>

              Communication

            </h4>

            <span>

              ★★★★☆

            </span>

          </div>

          <div>

            <h4>

              Confidence

            </h4>

            <span>

              ★★★★★

            </span>

          </div>

          <div>

            <h4>

              Technical Accuracy

            </h4>

            <span>

              ★★★★★

            </span>

          </div>

          <div>

            <h4>

              Structure

            </h4>

            <span>

              ★★★★☆

            </span>

          </div>

        </div>

      </div>

    </div>

  );

}

export default InterviewQuestions;