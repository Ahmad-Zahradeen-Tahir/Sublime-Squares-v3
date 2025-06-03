import "./Why.css";
import img from "../assets/mount.jpg";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Why = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Adjust duration as needed
  }, []);

  return (
    <section className="why">
      {/* Left Side: Image Container */}
      <div data-aos="fade-left" className="why-image">
        <img src={img} alt="Company Overview" />
      </div>

      {/* Right Side: Text Content */}
      <div data-aos="fade-right" className="why-content">
        <span className="section-label">Why Choose Us</span>
        <h2>Why Sublime Squares</h2>
        <p className="why-highlight">
          At Sublime Squares, we combine innovation, expertise, and a deep
          understanding of client needs to deliver reliable and future-ready
          solutions. Our commitment to quality, personalized service, and
          sustainable technology ensures you get results that are efficient,
          secure, and built to last.
        </p>
        <br />
        <p>
          We ensure top-tier results by using modern methodologies and a
          skilled, diverse team. From design to deployment, our professional
          setup enables precise assembly, thorough testing, and smooth
          installation—guaranteeing solutions that perform reliably in the real
          world.
        </p>
        <a href="#ourservices">
          <button className="why-button">Learn More</button>
        </a>
      </div>
    </section>
  );
};

export default Why;
