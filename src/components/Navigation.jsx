import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/Navigation.css";
import logo from "../Images/bereshit-logo.png";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const isLandingPage = location.pathname === "/";

  useEffect(() => {
    if (!isLandingPage) {
      // On other pages, navbar should always be white
      setIsScrolled(true);
      return;
    }

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isLandingPage]);

  return (
    <nav
      className={`navbar ${
        isLandingPage ? (isScrolled ? "scrolled" : "") : "scrolled"
      }`}
    >
      <div className="nav-container">
        <div className="nav-logo">
          <img
            src={logo}
            alt="Bereshit Global Logo"
            className="logo-img"
            onError={(e) => {
              e.target.style.display = "none";
              console.warn(
                "Failed to load logo image at ../Images/bereshit-logo.png",
              );
            }}
          />
          <h2>BERESHIT GLOBAL</h2>
        </div>

        <div className={`nav-menu ${isMenuOpen ? "active" : ""}`}>
          <Link
            to="/"
            className="nav-item"
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/services"
            className="nav-item"
            onClick={() => setIsMenuOpen(false)}
          >
            Services
          </Link>
          <Link
            to="/about"
            className="nav-item"
            onClick={() => setIsMenuOpen(false)}
          >
            About
          </Link>
          <Link
            to="/projects"
            className="nav-item"
            onClick={() => setIsMenuOpen(false)}
          >
            Projects
          </Link>
          <Link
            to="/contact"
            className="nav-item"
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
          </Link>
        </div>

        <div className="nav-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
