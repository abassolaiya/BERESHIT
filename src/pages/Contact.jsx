import React, { useState } from "react";
import "../styles/Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    projectType: "",
    budget: "",
    timeline: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const sendToWhatsApp = () => {
    // Format the message with all form details
    const message = `
*New Contact Inquiry from Bereshit Global Website*

*Name:* ${formData.name}
*Email:* ${formData.email}
*Phone:* ${formData.phone}
*Company:* ${formData.company}
*Project Type:* ${formData.projectType}
*Budget Range:* ${formData.budget}
*Timeline:* ${formData.timeline}
*Message:*
${formData.message}

_This message was sent from the Bereshit Global website_
    `.trim();

    // Encode the message for URL
    const encodedMessage = encodeURIComponent(message);

    // WhatsApp API URL - REPLACE WITH YOUR ACTUAL WHATSAPP NUMBER
    const whatsappUrl = `https://wa.me/+2348067716622?text=${encodedMessage}`;

    // Open WhatsApp in a new tab
    window.open(whatsappUrl, "_blank");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sendToWhatsApp();
  };

  return (
    <div className="contact-page">
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="contact-hero-content">
          <h1>Get In Touch</h1>
          <p>
            Ready to start your project? Contact us for innovative MEP solutions
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="contact-content">
        <div className="container">
          <div className="contact-grid">
            {/* Contact Form */}
            <div className="contact-form-container">
              <div className="section-header">
                <h2>Send Us a Message</h2>
                <p>Fill out the form and we'll contact you via WhatsApp</p>
              </div>

              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Full Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="phone">Phone Number *</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="company">Company</label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="projectType">Project Type *</label>
                    <select
                      id="projectType"
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select Project Type</option>
                      <option value="MEP Design">MEP Design</option>
                      <option value="MEP Construction">MEP Construction</option>
                      <option value="Energy Audit">Energy Audit</option>
                      <option value="Solar Systems">Solar Systems</option>
                      <option value="Home Automation">Home Automation</option>
                      <option value="Project Management">
                        Project Management
                      </option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="budget">Budget Range</label>
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                    >
                      <option value="">Select Budget Range</option>
                      <option value="Under ₦500,000">Under ₦500,000</option>
                      <option value="₦500,000 - ₦2 million">
                        ₦500,000 - ₦2 million
                      </option>
                      <option value="₦2 million - ₦5 million">
                        ₦2 million - ₦5 million
                      </option>
                      <option value="₦5 million - ₦10 million">
                        ₦5 million - ₦10 million
                      </option>
                      <option value="₦10 million - ₦50 million">
                        ₦10 million - ₦50 million
                      </option>
                      <option value="Over ₦50 million">Over ₦50 million</option>
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="timeline">Project Timeline</label>
                  <select
                    id="timeline"
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleChange}
                  >
                    <option value="">Select Timeline</option>
                    <option value="Immediately">Immediately</option>
                    <option value="Within 1 month">Within 1 month</option>
                    <option value="1-3 months">1-3 months</option>
                    <option value="3-6 months">3-6 months</option>
                    <option value="6+ months">6+ months</option>
                    <option value="Not sure">Not sure</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="message">Project Details *</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Please describe your project requirements, location, and any specific needs..."
                    required
                  ></textarea>
                </div>

                <button type="submit" className="whatsapp-btn">
                  <span className="whatsapp-icon">💬</span>
                  Send via WhatsApp
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="contact-info">
              <div className="info-card">
                <h3>Contact Information</h3>
                <p>Reach out to us through any of these channels</p>

                <div className="contact-method">
                  <div className="contact-icon">📱</div>
                  <div>
                    <h4>Phone</h4>
                    <p>+234 806 771 6622</p>
                    <a href="tel:+2348067716622" className="contact-link">
                      Call Now
                    </a>
                  </div>
                </div>

                <div className="contact-method">
                  <div className="contact-icon">📧</div>
                  <div>
                    <h4>Email</h4>
                    <p>info@bereshitglobal.com</p>
                    <a
                      href="mailto:info@bereshitglobal.com"
                      className="contact-link"
                    >
                      Send Email
                    </a>
                  </div>
                </div>

                <div className="contact-method">
                  <div className="contact-icon">💬</div>
                  <div>
                    <h4>WhatsApp</h4>
                    <p>Direct chat with our team</p>
                    <a
                      href="https://wa.me/234XXXXXXXXXX"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="contact-link whatsapp-link"
                    >
                      Start Chat
                    </a>
                  </div>
                </div>

                <div className="contact-method">
                  <div className="contact-icon">📍</div>
                  <div>
                    <h4>Office Address</h4>
                    <p>
                      123 Engineering Street, Victoria Island, Lagos, Nigeria
                    </p>
                    <a
                      href="https://maps.google.com/?q=123+Engineering+Street,Victoria+Island,Lagos,Nigeria"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="contact-link"
                    >
                      View on Map
                    </a>
                  </div>
                </div>

                <div className="business-hours">
                  <h4>Business Hours</h4>
                  <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
                  <p>Saturday: 9:00 AM - 2:00 PM</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="map-section">
        <div className="container">
          <div className="section-header">
            <h2>Our Location</h2>
            <p>Visit our office or reach out to us</p>
          </div>
          <div className="map-placeholder">
            <div className="map-content">
              <div className="map-icon">🗺️</div>
              <h3>Victoria Island, Lagos</h3>
              <p>123 Engineering Street, Victoria Island, Lagos, Nigeria</p>
              <a
                href="https://maps.google.com/?q=123+Engineering+Street,Victoria+Island,Lagos,Nigeria"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Open in Google Maps
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
