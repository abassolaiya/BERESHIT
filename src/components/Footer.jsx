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
              <p>Phone: +234 XXX XXXX XXX</p>
              <div className="social-icons">
                <span className="social-icon">📱</span>
                <span className="social-icon">💬</span>
                <span className="social-icon">📧</span>
              </div>
            </div>
            <div className="footer-section">
              <h4>Quick Links</h4>
              <p>Services</p>
              <p>About Us</p>
              <p>Projects</p>
              <p>Contact</p>
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
