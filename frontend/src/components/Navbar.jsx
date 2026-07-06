import "../styles/navbar.css";
import { Link, useLocation } from "react-router-dom";
import { Rocket, LogIn, Home, FilePlus, HelpCircle } from "lucide-react";

function Navbar() {

  const location = useLocation();

  const isLanding = location.pathname === "/";

  return (

    <nav className="navbar">

      <Link to="/" className="logo logo-link">

        <h2>WayHire</h2>

        <p>AI Recruitment Platform</p>

      </Link>

      {

        isLanding ?

        (

          <>

            <div className="nav-links">

              <a href="#features">Features</a>

              <a href="#journey">Journey</a>

              <a href="#resources">Resources</a>

            </div>

            <div className="nav-buttons">

              <button className="login-btn">

                <LogIn size={18}/>

                <span>Sign In</span>

              </button>

              <Link
                to="/upload"
                className="start-btn"
              >

                <Rocket size={18}/>

                <span>Start Free</span>

              </Link>

            </div>

          </>

        )

        :

        (

          <>

            <div className="nav-links">

              <Link to="/">

                <Home size={16}/>

                Home

              </Link>

              <Link to="/upload">

                <FilePlus size={16}/>

                New Analysis

              </Link>

              <a href="#">

                <HelpCircle size={16}/>

                Help

              </a>

            </div>

            <div className="nav-buttons">

              <button className="login-btn">

                <LogIn size={18}/>

                Sign In

              </button>

            </div>

          </>

        )

      }

    </nav>

  );

}

export default Navbar;