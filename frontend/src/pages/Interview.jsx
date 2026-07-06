import Layout from "../components/Layout";
import ProgressTracker from "../components/ProgressTracker";

import InterviewHero from "../components/InterviewHero";
import InterviewSession from "../components/InterviewSession";

import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

import "../styles/interview.css";

function Interview(){

    return(

        <Layout>

            <ProgressTracker current={3}/>

            <div className="interview-page">

                <InterviewHero/>

                <InterviewSession/>

                <div className="interview-footer">

                    <Link
                        to="/final-report"
                        className="finish-btn"
                    >

                        Generate Final Career Report

                        <ArrowRight size={18}/>

                    </Link>

                </div>

            </div>

        </Layout>

    );

}

export default Interview;