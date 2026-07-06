import { useState } from "react";
import { Link } from "react-router-dom";

import Layout from "../components/Layout";
import ProgressTracker from "../components/ProgressTracker";

import { useCareer } from "../context/CareerContext";

import "../styles/target.css";

import {
  Briefcase,
  Building2,
  FileText,
  ArrowRight
} from "lucide-react";

function TargetSelection() {

  const { careerData, setCareerData } = useCareer();

  const [role, setRole] = useState(careerData.role);
  const [company, setCompany] = useState(careerData.company);
  const [jobDescription, setJobDescription] = useState(careerData.jobDescription);

  const handleContinue = () => {

    setCareerData({

      ...careerData,

      role,

      company,

      jobDescription

    });

  };

  return (

    <Layout>

      <ProgressTracker current={0}/>

      <div className="target-page">

        <h1>Personalize Your Analysis</h1>

        <p>

          Tell WayHire what you're preparing for so we can
          tailor every recommendation to your goals.

        </p>

        <div className="target-card">

          <div className="input-group">

            <label>

              <Briefcase size={18}/>

              Target Role *

            </label>

            <input

              type="text"

              value={role}

              onChange={(e)=>setRole(e.target.value)}

              placeholder="Software Engineer, SAP Consultant, HR Executive..."

            />

          </div>

          <div className="input-group">

            <label>

              <Building2 size={18}/>

              Target Company (Optional)

            </label>

            <input

              type="text"

              value={company}

              onChange={(e)=>setCompany(e.target.value)}

              placeholder="Google, SAP, Deloitte..."

            />

          </div>

          <div className="input-group">

            <label>

              <FileText size={18}/>

              Job Description (Optional)

            </label>

            <textarea

              rows="8"

              value={jobDescription}

              onChange={(e)=>setJobDescription(e.target.value)}

              placeholder="Paste the Job Description here..."

            />

          </div>

          <Link

            to="/loading"

            onClick={handleContinue}

            className="analyze-btn"

          >

            Generate Career Analysis

            <ArrowRight size={18}/>

          </Link>

        </div>

      </div>

    </Layout>

  );

}

export default TargetSelection;