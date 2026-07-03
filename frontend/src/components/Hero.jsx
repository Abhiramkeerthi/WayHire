import "../styles/hero.css";
import { Link } from "react-router-dom";
import { Rocket, Play } from "lucide-react";

function Hero() {
  return (
    <section className="hero">

      <p className="hero-tag">
        Recruitment feels haywire?
      </p>

      <h1>
        It's time to go <br />
        <span>Way Higher.</span>
      </h1>

      <h3>With WayHire.</h3>

      <p className="hero-description">
        Analyze your resume, benchmark yourself against your dream role,
        generate a personalized roadmap, practice AI interviews and
        experience a complete recruitment journey — all in one platform.
      </p>

      <div className="hero-buttons">

        <Link to="/upload" className="hero-primary">
          <Rocket size={20} />
          <span>Start Free</span>
        </Link>

        <button className="hero-secondary">
          <Play size={18} />
          <span>Watch Demo</span>
        </button>

      </div>

      <p className="hero-trust">
        Trusted by aspiring professionals preparing for placements,
        internships and career transitions.
      </p>

    </section>
  );
}

export default Hero;