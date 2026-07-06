import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import Layout from "../components/Layout";
import ProgressTracker from "../components/ProgressTracker";

import { useCareer } from "../context/CareerContext";

import "../styles/loading.css";

import {
  FileText,
  BadgeCheck,
  Route,
  Bot,
  ClipboardList,
  CheckCircle2,
  Loader2,
  Briefcase,
  Building2,
  Sparkles,
} from "lucide-react";

function Loading() {

  const navigate = useNavigate();

  const { careerData } = useCareer();

  const steps = [
    {
      icon: <FileText size={22} />,
      title: "Reading Resume",
    },
    {
      icon: <BadgeCheck size={22} />,
      title: "Understanding Target Role",
    },
    {
      icon: <Route size={22} />,
      title: "Comparing Skills & Requirements",
    },
    {
      icon: <Bot size={22} />,
      title: "Generating Career Analysis",
    },
    {
      icon: <ClipboardList size={22} />,
      title: "Preparing Personalized Roadmap",
    },
  ];

  const aiMessages = [
    "Extracting skills from your resume...",
    `Comparing your profile with ${
      careerData.role || "your selected role"
    } requirements...`,
    "Checking ATS compatibility...",
    "Identifying missing skills and keywords...",
    "Generating personalized career guidance...",
    "Preparing your learning roadmap...",
  ];

  const [current, setCurrent] = useState(0);
  const [messageIndex, setMessageIndex] = useState(0);

  useEffect(() => {

    const stepInterval = setInterval(() => {

      setCurrent((prev) => {

        if (prev >= steps.length) {

          clearInterval(stepInterval);

          setTimeout(() => {

            navigate("/ats-report");

          }, 800);

          return prev;

        }

        return prev + 1;

      });

    }, 1200);

    const messageInterval = setInterval(() => {

      setMessageIndex((prev) =>

        prev === aiMessages.length - 1
          ? 0
          : prev + 1

      );

    }, 1500);

    return () => {

      clearInterval(stepInterval);

      clearInterval(messageInterval);

    };

  }, []);

  return (

    <Layout>

      <ProgressTracker current={0} />

      <div className="loading-page">

        <Loader2
          size={70}
          className="spinner"
        />

        <h1>Generating Career Analysis</h1>

        <p>

          We're analyzing your resume against your selected
          opportunity and preparing personalized ATS insights,
          career guidance and a learning roadmap.

        </p>

        <div className="analysis-preview">

          <div>

            <Briefcase size={18} />

            <span>

              <strong>Role:</strong>{" "}

              {careerData.role || "Not Selected"}

            </span>

          </div>

          <div>

            <Building2 size={18} />

            <span>

              <strong>Company:</strong>{" "}

              {careerData.company || "Industry Standards"}

            </span>

          </div>

          <div>

            <FileText size={18} />

            <span>

              <strong>Reference:</strong>{" "}

              {careerData.jobDescription.trim() !== ""
                ? "Job Description"
                : "Industry Standards"}

            </span>

          </div>

        </div>

        <div className="ai-thinking">

          <Sparkles size={18} />

          <span>

            {aiMessages[messageIndex]}

          </span>

        </div>

        <div className="progress-bar">

          <div
            className="progress-fill"
            style={{
              width: `${Math.min(
                (current / steps.length) * 100,
                100
              )}%`,
            }}
          />

        </div>

        <div className="loading-list">

          {steps.map((step, index) => (

            <div
              key={index}
              className={`loading-item ${
                index < current ? "done" : ""
              }`}
            >

              {index < current ? (
                <CheckCircle2 size={22} />
              ) : (
                step.icon
              )}

              <span>{step.title}</span>

            </div>

          ))}

        </div>

      </div>

    </Layout>

  );

}

export default Loading;