import Layout from "../components/Layout";
import ProgressTracker from "../components/ProgressTracker";

import RoadmapHero from "../components/RoadmapHero";
import PrioritySkills from "../components/PrioritySkills";
import WeeklyRoadmap from "../components/WeeklyRoadmap";
import RecommendedResources from "../components/RecommendedResources";

import { Link } from "react-router-dom";
import { ArrowRight, Sparkles } from "lucide-react";

import "../styles/roadmap.css";

function Roadmap() {

  return (

    <Layout>

      <ProgressTracker current={2} />

      <div className="roadmap-page">

        <RoadmapHero />

        <PrioritySkills />

        <WeeklyRoadmap />

        <RecommendedResources />

        <div className="coach-card">

          <div className="coach-title">

            <Sparkles size={24} />

            <h2>AI Career Coach</h2>

          </div>

          <p>

            Based on your resume and target opportunity,
            here are our top recommendations before you apply.

          </p>

          <ul>

            <li>
              Focus on strengthening your missing skills first.
            </li>

            <li>
              Improve your resume using the ATS suggestions.
            </li>

            <li>
              Complete at least one strong portfolio project.
            </li>

            <li>
              Practice mock interviews before applying.
            </li>

          </ul>

          <div className="coach-footer">

            <span>

              Estimated Improvement

            </span>

            <h3>

              67% → 87%

            </h3>

          </div>

        </div>

        <div className="roadmap-bottom">

          <Link
            to="/interview"
            className="continue-interview"
          >

            Continue to AI Interview

            <ArrowRight size={18} />

          </Link>

        </div>

      </div>

    </Layout>

  );

}

export default Roadmap;