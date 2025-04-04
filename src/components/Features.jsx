import React from "react";
import { Lightbulb, Award, Send } from "lucide-react";
import "./Features.css";

const Features = () => {
  const features = [
    {
      id: 1,
      icon: <Lightbulb className="icon" color="green" size={40} />,
      title: "Innovative Technology",
      description: "A specialized provider with cutting-edge technologies.",
    },
    {
      id: 2,
      icon: <Award className="icon" color="green" size={40} />,
      title: "Quality Service Delivery",
      description: "Partnering to provide extra value through digital transformation.",
    },
    {
      id: 3,
      icon: <Send className="icon" color="green" size={40} />,
      title: "Quick Support",
      description: "Reliable to deliver on-time response.",
    },
  ];

  return (
    <section className="features">
      {features.map((feature) => (
        <div key={feature.id} className="feature-card">
          {feature.icon}
          <h3>{feature.title}</h3>
          <p>{feature.description}</p>
        </div>
      ))}
    </section>
  );
};

export default Features;
