import "../styles/progress.css";

import {
  FileText,
  BadgeCheck,
  Route,
  Bot,
  ClipboardList
} from "lucide-react";

function ProgressTracker({ current }) {

  const steps = [
    {
      icon: <FileText size={22} />,
      label: "Resume"
    },
    {
      icon: <BadgeCheck size={22} />,
      label: "ATS"
    },
    {
      icon: <Route size={22} />,
      label: "Roadmap"
    },
    {
      icon: <Bot size={22} />,
      label: "Interview"
    },
    {
      icon: <ClipboardList size={22} />,
      label: "Report"
    }
  ];

  return (

    <div className="progress-container">

      {steps.map((step,index)=>(

        <div
          key={index}
          className={`progress-step ${
            current===index
            ? "active"
            : current>index
            ? "completed"
            : ""
          }`}
        >

          <div className="progress-icon">

            {step.icon}

          </div>

          <p>{step.label}</p>

        </div>

      ))}

    </div>

  );

}

export default ProgressTracker;