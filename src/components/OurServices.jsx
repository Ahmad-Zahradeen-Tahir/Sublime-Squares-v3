import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import panel from "../assets/panel.jpg";
import infra from "../assets/infra.jpg";
import security from "../assets/security.jpg";
import maintenance from "../assets/maint.jpg";
import tren from "../assets/tren.jpg";
import "./OurServices.css";

const OurServices = () => {
  const listOfServices = [
    {
      title: "IT infrastructure",
      img: infra,
      desc: "We design, implement, and manage comprehensive IT solutions that enhance business efficiency, security, and scalability. Our services include network design and implementation for high-performance connectivity, cloud solutions and data management for secure storage and continuity, IT security and risk management to safeguard sensitive data, and systems integration and optimization to streamline operations and improve productivity.",
      link: "#",
      flip: false,
    },
    {
      title: "Security & Safety Systems",
      img: security,
      desc: "We provide advanced security and safety solutions to protect assets, people, and businesses from both physical and digital threats. Our services include surveillance and access control systems with CCTV and biometric authentication, fire detection and suppression systems for enhanced safety, smart emergency response solutions for crisis management, and cybersecurity infrastructure to defend against cyber threats through penetration testing and threat monitoring.",
      link: "#",
      flip: true,
    },
    {
      title: "Renewable Energy Solutions",
      img: panel,
      desc: "We provide renewable energy solutions that enable businesses and communities to transition to sustainable and cost-effective power sources. Our expertise includes solar power and hybrid energy systems for off-grid and on-grid solutions, energy storage and grid integration to enhance efficiency and reliability, and energy consulting and optimization to reduce costs and carbon footprints through strategic energy audits.",
      link: "#",
      flip: false,
    },
    {
      title: "Support & Maintenance",
      img: maintenance,
      desc: "We provide comprehensive maintenance services to ensure the long-term performance and reliability of IT and engineering systems. Our offerings include IT system maintenance with regular updates and security patches, renewable energy system servicing for solar panels and energy storage units, and security & surveillance system support to keep security infrastructure operating smoothly.",
      link: "#",
      flip: true,
    },
    {
      title: "Training & Development",
      img: tren,
      desc: "We provide specialized training programs to help businesses and professionals stay ahead in technology-driven industries. Our courses cover IT and cybersecurity best practices, including network security and ethical hacking, renewable energy system deployment for solar installation and maintenance, and engineering & technical skills development focused on automation, system integration, and emerging technologies.",
      link: "#",
      flip: false,
    },
  ];

  useEffect(() => {
    AOS.init({ duration: 1000 }); // Adjust duration as needed
  }, []);

  return (
    <>
      <h2 className="ourS">Our Services</h2>
      {listOfServices.map((service, index) => (
        <section
          key={index}
          className={
            service.flip ? "power-solutions fliper" : "power-solutions"
          }
          data-aos={service.flip? "fade-right" : "fade-left"}
        >
          <div className="image-container">
            <img
              src={service.img}
              alt="Solar panels and wind turbines"
              className="power-image"
            />
          </div>
          <div className="text-container">
            <h2>{service.title}</h2>
            <p>{service.desc}</p>
            <a href={service.link} className="learn-more">
              Learn More
            </a>
          </div>
        </section>
      ))}
    </>
  );
};

export default OurServices;
