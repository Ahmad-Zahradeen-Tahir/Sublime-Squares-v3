import React from "react";
import "./Contact.css";
import { Mail, Map, Phone } from "lucide-react";

const Contact = () => {
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
          <span className="support-icon"><Map/></span>
          <div>
            <h3 className="support-title">Address</h3>
            <p className="support-text">No. 340 Molai Road, Maiduguri, Borno State</p>
          </div>
        </div>

        <div className="support-item">
          <span className="support-icon"><Mail/></span>
          <div>
            <h3 className="support-title">Email</h3>
            <p className="support-text">info@sublimesquares.ng</p>
          </div>
        </div>

        <div className="support-item">
          <span className="support-icon"><Phone/></span>
          <div>
            <h3 className="support-title">Telephone No.</h3>
            <p className="support-text">+2348032483081</p>
          </div>
        </div>
      </div>

      <div className="support-form">
        <p className="support-response">
          <em>We just need a couple of minutes! <br /> No more than 24hrs since receiving your issue ticket.</em>
        </p>

        <form>
          <label className="support-label">Name</label>
          <input type="text" required className="support-input" placeholder="Enter full name" />

          <label className="support-label">Email <span className="support-required">*</span></label>
          <input type="email" className="support-input" placeholder="Enter email address" required />

          <label className="support-label">Message</label>
          <textarea className="support-textarea" placeholder="Type your message"></textarea>

          <button type="submit" className="support-button">SEND MESSAGE</button>
        </form>
      </div>
    </div>
      </section>
    </>
  );
};

export default Contact;
