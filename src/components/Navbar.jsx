import { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/sublime-logo.png";
import "./Navbar.css"; // Importing vanilla CSS
import { Mail, Menu, X } from "lucide-react";

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
  const [navOpen, setNavOpen] = useState(false);

  const changeNav = () => {
    if (window.scrollY >= 10) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changeNav);

  const newNav = (
    <div onClick={() => setNavOpen(false)} className="new-nav">
      <ul className="new-links">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "active" : "")}
            onClick={() => setNavOpen(false)}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? "active" : "")}
            onClick={() => setNavOpen(false)}
            to="/services"
          >
            Products & Services
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? "active" : "")}
            onClick={() => setNavOpen(false)}
            to="/about"
          >
            About Us
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? "active" : "")}
            onClick={() => setNavOpen(false)}
            to="/contact"
          >
            Contact Us
          </NavLink>
        </li>
      </ul>
    </div>
  );

  return (
    <>
      <nav className={navbar ? "navbar workingNav" : "navbar"}>
        <div className="container">
          {/* Logo Section */}
          <div className="logo-container">
            <img src={logo} alt="Logo" className="logo-img" />
            <span className="logo-text">Sublime Squares</span>
          </div>

          {/* Navigation Links */}
          <ul className="nav-links">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? "active" : "")}
                to="/services"
              >
                Products & Services
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? "active" : "")}
                to="/about"
              >
                About Us
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? "active" : "")}
                to="/contact"
              >
                Contact Us
              </NavLink>
            </li>
            <li>
              <button>
                {!navOpen && <Menu onClick={() => setNavOpen(true)} />}
                {navOpen && <X onClick={() => setNavOpen(false)} />}
              </button>
            </li>
          </ul>
        </div>
      </nav>

      {navOpen && newNav}

      {/* Floating Message Button */}
      <button className="floating-btn">
        <Mail />
      </button>
    </>
  );
};

export default Navbar;
