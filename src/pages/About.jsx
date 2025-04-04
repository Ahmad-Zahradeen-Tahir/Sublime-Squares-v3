import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./About.css";
import {
  CheckCircle,
  Hourglass,
  Lightbulb,
  QuoteIcon,
  Star,
} from "lucide-react";

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Adjust duration as needed
  }, []);
  return (
    <>
      <section className="ahead">
        <div className="overlay"></div>
        <div className="head-content">
          <h1>About Us</h1>
          <p>
            Sublime Squares Limited is a leading provider of IT, renewable
            energy, and engineering services, offering innovative and tailored
            solutions to drive efficiency, security, and sustainability. We
            serve businesses, communities, and governments, empowering them to
            thrive in a technology-driven world.
          </p>
        </div>
      </section>
      <section className="about-intro">
        <h2>
          We are dedicated to providing <br />
          <span>optimal IT solutions</span>
        </h2>
        <div>
          <p>
            Sublime Squares Limited is a value-driven systems integrator that
            helps clients enhance service quality, security, efficiency, and the
            end-user experience by delivering cutting-edge solutions that are
            carefully crafted, reusable, and tailored to meet each client's
            unique needs.
          </p>
          <p>
            To ensure high-quality results, we use advanced methodologies and
            rely on a diverse team of qualified and experienced professionals,
            along with a professional industrial environment for assembling,
            staging, testing, dispatching, and installing solutions and
            equipment.
          </p>
          <p>
            Our significant growth is driven by a consultative approach,
            selective partnerships with renowned IT companies, and the combined
            expertise of our skilled engineers and managers, all focused on
            client satisfaction and the rapid deployment of innovative
            technologies.
          </p>
        </div>
      </section>
      <section className="quote">
        <QuoteIcon />
        <h3>Innovation is the key to success.</h3>
        <div className="mention">
          <div className="l-men"></div>
          <span>Aliko Dangote</span>
          <div className="l-men"></div>
        </div>
      </section>
      <section className="us">
        <div data-aos="fade-right" className="mission">
          <h3>Our Mission</h3>
          <p>
            Our Mission at Aliph Technology is to provide converged and quality
            IT services through innovation, professionalism and partnership in a
            cost-effective manner.
          </p>
          <ul className="m-list">
            <li>
              <CheckCircle />
              <p>
                Make continuous improvements to our services and people – a
                prime factor in our continual success.
              </p>
            </li>
            <li>
              <CheckCircle />
              <p>
                Make continuous improvements to our services and people – a
                prime factor in our continual success.
              </p>
            </li>
            <li>
              <CheckCircle />
              <p>
                Make continuous improvements to our services and people – a
                prime factor in our continual success.
              </p>
            </li>
          </ul>
        </div>
        <div data-aos="fade-left" className="mission">
          <h3>Our vision</h3>
          <p>
            Our Mission at Aliph Technology is to provide converged and quality
            IT services through innovation, professionalism and partnership in a
            cost-effective manner.
          </p>
          <ul className="m-list">
            <li>
              <CheckCircle />
              <p>
                Make continuous improvements to our services and people – a
                prime factor in our continual success.
              </p>
            </li>
            <li>
              <CheckCircle />
              <p>
                Make continuous improvements to our services and people – a
                prime factor in our continual success.
              </p>
            </li>
            <li>
              <CheckCircle />
              <p>
                Make continuous improvements to our services and people – a
                prime factor in our continual success.
              </p>
            </li>
          </ul>
        </div>
      </section>
      <section className="values">
        <div className="v1">
          <div>
            <div data-aos="fade-right" className="v1container">
              <h2>
                Company Values <br />& Vision
              </h2>
              <p>Enabling IT to Deliver Value to our stakeholders.</p>
            </div>
          </div>
        </div>
        <div className="v2">
          <div className="overlay"></div>
        </div>
        <div className="v3">
          <div data-aos="fade-left" className="val">
            <div className="valIcon">
              <div className="valicont">
                <Star />
              </div>
            </div>
            <div className="valText">
              <h3>Safety</h3>
              <span>We care about people</span>
            </div>
          </div>
          <div data-aos="fade-left" className="val">
            <div className="valIcon">
              <div className="valicont">
                <Lightbulb />
              </div>
            </div>
            <div className="valText">
              <h3>Reliability</h3>
              <span>We have integrity</span>
            </div>
          </div>
          <div data-aos="fade-left" className="val">
            <div className="valIcon">
              <div className="valicont">
                <Hourglass />
              </div>
            </div>
            <div className="valText">
              <h3>Responsibility</h3>
              <span>We listen to what you say.</span>
            </div>
          </div>
        </div>
      </section>
      <section data-aos="fade-up" className="partners">
        <h2>Our Global Partners</h2>
        <p>
          We work with a trusted, select group of partners to provide you with
          access to the latest technologies, co-create tailored propositions
          that not only take your business through a transformation journey
          towards a modern workplace.
        </p>
      </section>
    </>
  );
};

export default About;
