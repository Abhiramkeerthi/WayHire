import Layout from "../components/Layout";
import ProgressTracker from "../components/ProgressTracker";

import CareerSummary from "../components/CareerSummary";
import StrengthWeakness from "../components/StrengthWeakness";
import CareerAdvice from "../components/CareerAdvice";
import ReportActions from "../components/ReportActions";

import "../styles/finalreport.css";

function FinalReport(){

    return(

        <Layout>

            <ProgressTracker current={4}/>

            <div className="final-page">

                <CareerSummary/>

                <StrengthWeakness/>

                <CareerAdvice/>

                <ReportActions/>

            </div>

        </Layout>

    );

}

export default FinalReport;