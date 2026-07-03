import "../styles/navbar.css";
import { Link } from "react-router-dom";
import { Rocket, LogIn } from "lucide-react";

function Navbar() {
  return (
    <nav className="navbar">

      <div className="logo">
        <Link to="/" className="logo-link">
          <h2>WayHire</h2>
        </Link>
        <p>AI Recruitment Platform</p>
      </div>

      <div className="nav-links">
        <a href="#features">Features</a>
        <a href="#journey">Journey</a>
        <a href="#resources">Resources</a>
      </div>

      <div className="nav-buttons">

        <button className="login-btn">
          <LogIn size={18} />
          <span>Sign In</span>
        </button>

        <Link to="/upload" className="start-btn">
          <Rocket size={18} />
          <span>Start Free</span>
        </Link>

      </div>

    </nav>
  );
}

export default Navbar;