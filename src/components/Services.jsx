import React from "react";
import { Server, Code, Shield, HelpingHand, BatteryCharging, HouseWifi, } from "lucide-react";
import "./Services.css";

const services = [
  {
    icon: <Server className="inIcon"/>,
    title: "IT Infrastructure",
    items: [
      "Network Infrastructure",
      "Internet Connectivity",
      "Data Centre Infrastructure",
      "Customized Enterprise",
      "Cloud Solutions",
      "Systems Integration",
    ],
  },
  {
    icon: <Shield className="inIcon"/>,
    title: "Security & Safety",
    items: [
      "IP CCTV Surveillance",
      "Analog CCTV",
      "Access Control",
      "Intrusion Detection",
      "Fire Alarm",
      "Entry Security",
      "Perimeter Fence Security",
      "Control Room Systems",
    ],
  },
  {
    icon: <BatteryCharging className="inIcon"/>,
    title: "Power Solutions",
    items: [
      "Solar Power Backup System",
      "Power Inverter Solutions",
      "Battery Power Backup System",
      "Uninterruptible Power Supply (UPS) Solutions",
      "Standby Power Generator",
    ],
  },
  {
    icon: <Code className="inIcon"/>,
    title: "Web & App Solution",
    items: [
      "Visual Design",
      "SEO (Search Engine Optimization)",
      "Payment Gateway Integration",
      "Responsivity",
      "Live Call/Chat",
      "Social Media Integration",
      "Translator",
      "Custom Emails",
      "Management",
    ],
  },
  {
    icon: <HouseWifi className="inIcon"/>,
    title: "Smart Building System",
    items: [
      "Access Control",
      "SIP/IP Intercom",
      "Integrated Alarm/Monitoring",
      "Cloud Service Platform",
      "Smart Home",
      "Energy Management",
      "Lift Management System",
      "Nurse Call System",
    ],
  },
  {
    icon: <HelpingHand className="inIcon"/>,
    title: "Consultancy & Training",
    items: [
      "Project Management",
      "IT & Telecom Assessment",
      "TEMs Analysis",
      "Quality Assurance, Management & Audit",
      "IS Studies/Security",
      "IT Training",
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
      <button className="view-services">View Services</button>
    </section>
  );
};

export default Services;
