import {useState} from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/sublime-logo.png";
import "./Navbar.css"; // Importing vanilla CSS
import { Mail } from "lucide-react";

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);

  const changeNav = () => {
    if (window.scrollY >= 10) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changeNav);

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
          </ul>
        </div>
      </nav>

      {/* Floating Message Button */}
      <button className="floating-btn"><Mail/></button>
    </>
  );
};

export default Navbar;
