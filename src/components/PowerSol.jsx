import React from "react";
import "./PowerSol.css";
import panel from "../assets/panel.jpg";
import { Link } from "react-router-dom";

const PowerSol = () => {
  return (
    <section className="power-solutions">
      <div className="image-container">
        <img
          src={panel}
          alt="Solar panels and wind turbines"
          className="power-image"
        />
      </div>
      <div className="text-container">
        <h2>Renewable Energy Solutions</h2>
        <div className="underline"></div>
        <p>
          We provide renewable energy solutions that enable businesses and
          communities to transition to sustainable and cost-effective power
          sources. Our expertise includes solar power and hybrid energy systems
          for off-grid and on-grid solutions, energy storage and grid
          integration to enhance efficiency and reliability, and energy
          consulting and optimization to reduce costs and carbon footprints
          through strategic energy audits.
        </p>
        <Link to="/about" className="learn-more">
          Learn More
        </Link>
      </div>
    </section>
  );
};

export default PowerSol;
