import { Link } from "react-router-dom";
import React from "react";
import "../styles/Footer.css";

function Footer() {
  return (
    <div>
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <h3>BERESHIT GLOBAL CO. LTD</h3>
              <p>RC: 1679214</p>
              <p>Innovative MEP Solutions for Sustainable Infrastructure</p>
            </div>
            <div className="footer-section">
              <h4>Contact Us</h4>
              <p>Email: info@bereshitglobal.com</p>
              <p>Phone: +234 8067716622</p>
              <div className="social-icons">
                <span className="social-icon">📱</span>
                <span className="social-icon">💬</span>
                <span className="social-icon">📧</span>
              </div>
            </div>
            <div className="footer-section">
              <h4>Quick Links</h4>
              <p>
                <Link to="/services" className="nav-item">
                  Services
                </Link>
              </p>
              <p>
                <Link to="/about" className="nav-item">
                  About
                </Link>
              </p>
              <p>
                <Link to="/projects" className="nav-item">
                  Projects
                </Link>
              </p>
              <p>
                <Link to="/contact" className="nav-item">
                  Contact
                </Link>
              </p>
            </div>
          </div>
          <div className="footer-bottom">
            <p>
              &copy; {new Date().getFullYear()} BERESHIT GLOBAL CO. LTD. All
              rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
