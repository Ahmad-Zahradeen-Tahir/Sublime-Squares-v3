import React from "react";
import "./ServicesPage.css";
import OurServices from "../components/OurServices";

const ServicesPage = () => {
  return (
    <>
      <section className="head">
        <div className="overlay"></div>
        <div className="head-content">
          <h1>Products & Services</h1>
          <p>
            Sublime Squares empowers businesses with intelligent technology
            solutions to drive transformation in their industries. We deliver
            cutting-edge innovations and best-practice business processes that
            enhance efficiency, scalability, and success in the modern digital
            economy.
          </p>
        </div>
      </section>
      <section className="serb">
        <OurServices />
      </section>
    </>
  );
};

export default ServicesPage;
