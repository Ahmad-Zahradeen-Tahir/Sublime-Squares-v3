import Who from "../components/Who";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Home.css";
import Features from "../components/Features";
import Services from "../components/Services";
import PowerSol from "../components/PowerSol";

const Hero = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Adjust duration as needed
  }, []);

  return (
    <>
      <section className="hero">
        <div className="overlay"></div>

        <div data-aos="fade-up" className="hero-content">
          <h1>
            <span className="highlight">A Solution-oriented</span>
            <br />
            Digital Innovation Firm
          </h1>
          <p>
            We <strong>DESIGN</strong> Products by <strong>OPTIMIZING</strong>{" "}
            <strong>Technology</strong> avec <strong>Creativity</strong>!
          </p>
          <a href="#who" className="cta-button">Discover More</a>
        </div>

        <div className="wave-divider">
          <svg viewBox="0 0 1440 320" preserveAspectRatio="none">
            <path
              fill="#ffffff"
              fillOpacity="1"
              d="M0,224L48,213.3C96,203,192,181,288,170.7C384,160,480,160,576,181.3C672,203,768,245,864,240C960,235,1056,181,1152,149.3C1248,117,1344,107,1392,101.3L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
        </div>
      </section>
      <section id="who">
        <Who />
      </section>
      <section id="features">
        <Features />
      </section>
      <section>
        <Services />
      </section>
      <section>
        <PowerSol />
      </section>
    </>
  );
};

export default Hero;
