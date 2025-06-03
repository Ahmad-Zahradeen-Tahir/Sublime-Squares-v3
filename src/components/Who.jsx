import "./Who.css";
import img from "../assets/image.jpg"
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {

  useEffect(() => {
    AOS.init({ duration: 1000 }); // Adjust duration as needed
  }, []);

  return (
    <section className="about">
      {/* Left Side: Image Container */}
      <div data-aos="fade-right" className="about-image">
        <img src={img} alt="Company Overview" />
      </div>

      {/* Right Side: Text Content */}
      <div data-aos="fade-left" className="about-content">
        <span className="section-label">Sublime Squares</span>
        <h2>Who We Are</h2>
        <p className="about-highlight">
          Sublime squares is a value-driven systems integrator that assists
          its clients in improving service quality and security, becoming more
          efficient, and creating a better end-user experience by providing
          cutting-edge solutions that are carefully crafted, reused, and
          tailored to the client’s needs.
        </p>
        <br />
        <p>
          To ensure high-quality results, the company employs cutting-edge
          methodologies and relies on a diverse pool of qualified and
          experienced employees, as well as a professional industrial
          environment for assembling, staging, testing, dispatching, and
          installation of solutions and equipment.
        </p>
       <a href="#ourservices"><button className="about-button">More About Us</button></a>
      </div>
    </section>
  );
};

export default About;
