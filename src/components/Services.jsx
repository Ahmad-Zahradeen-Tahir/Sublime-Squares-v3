import React from "react";
import { Server, Code, Shield, HelpingHand, BatteryCharging, HouseWifi, ServerIcon, } from "lucide-react";
import "./Services.css";
import { Link } from "react-router-dom";

const services = [
  {
    icon: <Server className="inIcon"/>,
    title: "IT Infrastructure",
    items: [
      "IT System Design",
      "Network Architecture ",
      "Cloud Solutions & Data Management",
      "Cybersecurity & Risk Management",
      "Systems Integration",
      "Performance Optimization ",
    ],
  },
  {
    icon: <Shield className="inIcon"/>,
    title: "Security & Safety Systems",
    items: [
      "Comprehensive Security Solutions",
      "Surveillance Systems",
      "Access Control",
      "Fire Detection Systems",
      "Fire Suppression Solutions",
      "Emergency Response Technology ",
      "Cybersecurity Infrastructure",
      "Threat Detection & Monitoring",
    ],
  },
  {
    icon: <BatteryCharging className="inIcon"/>,
    title: "Renewable Energy Solutions",
    items: [
      "Sustainable Energy Solutions",
      "Solar Power Systems",
      "Hybrid Energy Integration",
      "Energy Storage Solutions ",
      "Energy Audits & Optimization",
    ],
  },
  {
    icon: <Code className="inIcon"/>,
    title: "Support & Maintenance",
    items: [
      "IT System Maintenance",
      "Renewable Energy System Maintenance",
      "Security & Surveillance System Support",
      "Software Updates and Patches",
      "Hardware Diagnostics and Repairs",
      "Emergency IT and Engineering Support",
      "System Performance Monitoring",
    ],
  },
  {
    icon: <HelpingHand className="inIcon"/>,
    title: "Training & Development",
    items: [
      "Energy Management Techniques",
      "IT Skills Training",
      "STEM Training Programs",
      "Digital Literacy & Tech Proficiency",
      "Mentorship and Acceleration",
    ],
  },
  {
    icon: <ServerIcon className="inIcon"/>,
    title: "Research & Innovation",
    items: [
      "Data Collection & Analysis for Engineering Solutions",
      "Product Development & System Enhancements",
      "Policy Recommendations & Advisory Services",
      "Feasibility Studies & Market Research",
      "Real-time Data Utilization for Infrastructure Planning",
      "Energy Efficiency Optimization",
    ],
  },
];

const Services = () => {
  return (
    <section className="services-section">
      <h2 className="section-title">Our Services</h2>
      <div className="services-container">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <div className="service-icon">{service.icon}</div>
            <h3 className="service-title">{service.title}</h3>
            <ul className="service-list">
              {service.items.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <Link to="/services"><button className="view-services">View Services</button></Link>
    </section>
  );
};

export default Services;
