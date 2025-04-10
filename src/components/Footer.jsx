import React from "react";
import logo from "../assets/sublime-logo.png";
import {
  MessageCircle,
  Twitter,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  Map,
} from "lucide-react";
import "./Footer.css"; // Make sure to create and import this CSS file

const Footer = () => {
  return (
    <footer className="footer">
      {/* Wavy Top Divider */}
      <div className="footer-wave">
        <svg viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg">
          <path
            fill="black"
            fillOpacity="1"
            d="M0,192L48,170.7C96,149,192,107,288,90.7C384,75,480,85,576,96C672,107,768,117,864,117.3C960,117,1056,107,1152,101.3C1248,96,1344,96,1392,96L1440,96V0H0Z"
          />
        </svg>
      </div>

      <div className="footer-container">
        {/* First Column - Logo + Text + Social Media */}
        <div className="footer-column">
          <div className="footer-logo">
            <img src={logo} alt="Sublime Logo" />
            <span>Sublime Squares</span>
          </div>
          <p>
            SUBLIME SQUARES LTD is a dynamic technology company focused on
            delivering innovative solutions. We forge strategic partnerships
            with top global technologies. Our mission is to drive progress and
            provide cutting-edge solutions for our clients.
          </p>

          {/* Social Media Icons */}
          <div className="social-icons">
            <a href="https://wa.link/lqkydp">
              <MessageCircle />
            </a>
            <a href="https://x.com/sublimesquares?s=21">
              <Twitter />
            </a>
            <a href="https://x.com/sublimesquares?s=21">
              <Instagram />
            </a>
            <a href="https://x.com/sublimesquares?s=21">
              <Linkedin />
            </a>
          </div>
        </div>

        {/* Second Column - IT Solutions */}
        <div className="footer-column">
          <h3>IT Solutions</h3>
          <ul>
            <li>IT Infrastructure</li>
            <li>Unified Communications</li>
            <li>Power Solutions</li>
            <li>Support & Maintenance</li>
            <li>Smart Building Systems</li>
          </ul>
        </div>

        {/* Third Column - Our Company */}
        <div className="footer-column">
          <h3>Our Company</h3>
          <ul>
            <li>Leadership</li>
            <li>Company</li>
            <li>Diversity</li>
            <li>Jobs</li>
            <li>Press</li>
          </ul>
        </div>

        {/* Fourth Column - Contact Us */}
        <div className="footer-column">
          <h3>Contact Us</h3>
          <ul>
            <li>
              <Map /> No. 340 Molai Road, Maiduguri, Borno State
            </li>
            <li>
              <Mail /> info@sublimesquares.ng
            </li>
            <li>
              <Phone /> +2348032483081
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright & Other Links */}
      <div className="footer-bottom">
        <p>Copyright © SublimeSquares 2025. All rights reserved.</p>
        <div className="footer-links">
          <a href="#">Terms of Use</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Sitemap</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
