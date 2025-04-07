import React, { useRef, useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Contact.css";
import emailjs from "@emailjs/browser";
import { Check, Mail, Map, Phone } from "lucide-react";

const Contact = () => {
  const form = useRef();
  const [fname, setFname] = useState("");
  const [femail, setFemail] = useState("");
  const [fmessage, setFmessage] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);
  const [showFail, setShowFail] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000 }); // Adjust duration as needed
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_brwxr94", "template_wj6k1mb", form.current, {
        publicKey: "jqZC19BoXjMsT1B3y",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          setFemail("");
          setFmessage("");
          setFname("");
          setShowSuccess(true);
          setTimeout(()=>setShowSuccess(false), 3000)
        },
        (error) => {
          console.log("FAILED...", error.text);
          setShowFail(true);
          setTimeout(()=>setShowFail(false), 3000)
        }
      );
  };

  const win = (
    <div data-aos="fade-right" className="sent">
      <h3>Sent!</h3>
    </div>
  );
  const lose = (
    <div data-aos="fade-right" className="not-sent">
      <h3>error!</h3>
    </div>
  );

  return (
    <>
      <section className="contact">
        <div className="overlay"></div>
        <div className="head-content">
          <h1>Contact Us</h1>
          <p>
            Sublime Squres Limited Provides a 24hr Customer Support Service.
            <br />
            We Enthusiastically Anticipate To Be In Communication With You.
          </p>
        </div>
      </section>
      <section className="req">
        <h2>
          To Make Request For Further Information,
          <br />
          <span>contact Us Today!</span>
        </h2>
      </section>
      <section>
        <div className="support-wrapper">
          <div className="support-details">
            <div className="support-item">
              <span className="support-icon">
                <Map />
              </span>
              <div>
                <h3 className="support-title">Address</h3>
                <p className="support-text">
                  No. 340 Molai Road, Maiduguri, Borno State
                </p>
              </div>
            </div>

            <div className="support-item">
              <span className="support-icon">
                <Mail />
              </span>
              <div>
                <h3 className="support-title">Email</h3>
                <p className="support-text">info@sublimesquares.ng</p>
              </div>
            </div>

            <div className="support-item">
              <span className="support-icon">
                <Phone />
              </span>
              <div>
                <h3 className="support-title">Telephone No.</h3>
                <p className="support-text">+2348032483081</p>
              </div>
            </div>
          </div>

          <div className="support-form">
            {showSuccess && win}
            {showFail && lose}
            <p className="support-response">
              <em>
                We just need a couple of minutes! <br /> No more than 24hrs
                since receiving your issue ticket.
              </em>
            </p>

            <form ref={form} onSubmit={sendEmail}>
              <label className="support-label">Name</label>
              <input
                value={fname}
                onChange={(e) => setFname(e.target.value)}
                type="text"
                required
                className="support-input"
                placeholder="Enter full name"
                name="user_name"
              />

              <label className="support-label">
                Email <span className="support-required">*</span>
              </label>
              <input
                value={femail}
                onChange={(e) => setFemail(e.target.value)}
                type="email"
                className="support-input"
                placeholder="Enter email address"
                required
                name="user_email"
              />

              <label className="support-label">Message</label>
              <textarea
                value={fmessage}
                onChange={(e) => setFmessage(e.target.value)}
                required
                className="support-textarea"
                placeholder="Type your message"
                name="message"
              ></textarea>

              <button type="submit" value="Send" className="support-button">
                SEND MESSAGE
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
