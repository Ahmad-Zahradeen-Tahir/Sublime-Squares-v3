import React from "react";
import "./Who.css";
import img from "../assets/image.jpg"

const About = () => {
  return (
    <section className="about">
      {/* Left Side: Image Container */}
      <div className="about-image">
        <img src={img} alt="Company Overview" />
      </div>

      {/* Right Side: Text Content */}
      <div className="about-content">
        <span className="section-label">Aliph Technologies</span>
        <h2>Who We Are</h2>
        <p className="about-highlight">
          Aliph Technologies is a value-driven systems integrator that assists
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
        <button className="about-button">More About Aliph</button>
      </div>
    </section>
  );
};

export default About;
