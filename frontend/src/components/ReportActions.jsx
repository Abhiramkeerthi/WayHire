import "../styles/finalreport.css";

import {
    Download,
    RotateCcw,
    Share2,
    Save,
} from "lucide-react";

function ReportActions(){

    return(

        <div className="actions-section">

            <h2>

                Next Steps

            </h2>

            <p>

                Save your report, download it for future reference
                or start a new personalized career analysis.

            </p>

            <div className="actions-grid">

                <button className="primary-action">

                    <Download size={20}/>

                    Download Report

                </button>

                <button className="secondary-action">

                    <RotateCcw size={20}/>

                    New Analysis

                </button>

                <button className="secondary-action">

                    <Share2 size={20}/>

                    Share Report

                </button>

                <button className="secondary-action">

                    <Save size={20}/>

                    Save Report

                </button>

            </div>

        </div>

    );

}

export default ReportActions;