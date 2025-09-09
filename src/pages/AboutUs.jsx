import React from "react";
import "../styles/AboutUs.css";

const AboutUs = () => {
  return (
    <div className="about-us-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="about-hero-content">
          <h1>About BERESHIT GLOBAL</h1>
          <p>
            Leading the way in innovative MEP solutions for sustainable
            infrastructure
          </p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="company-overview">
        <div className="container">
          <div className="section-header">
            <h2>Company Overview</h2>
            <p>BERESHIT GLOBAL CO. LTD - RC: 1679214</p>
          </div>
          <div className="overview-content">
            <div className="overview-text">
              <p>
                Bereshit Global Co. Ltd is a specialized engineering solutions
                provider with a focus on mechanical, electrical, and plumbing
                (MEP) systems. Over the years, we have evolved into a
                multi-disciplinary engineering firm, offering a comprehensive
                suite of services that includes MEP design & construction,
                energy audits, renewable energy solutions, instrumentation &
                control engineering, home automation, and general engineering
                consulting.
              </p>
              <p>
                Our track record spans residential, commercial, corporate,
                academic, industrial, and infrastructure projects, where we've
                consistently demonstrated technical excellence and a deep
                commitment to delivering quality, efficiency, and value.
              </p>
            </div>
            <div className="overview-stats">
              <div className="stat">
                <h3>15+</h3>
                <p>Years of Experience</p>
              </div>
              <div className="stat">
                <h3>250+</h3>
                <p>Projects Completed</p>
              </div>
              <div className="stat">
                <h3>50+</h3>
                <p>Expert Engineers</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="mission-vision">
        <div className="container">
          <div className="mv-grid">
            <div className="mv-card vision">
              <div className="mv-icon">👁️</div>
              <h3>Our Vision</h3>
              <p>
                "To become a global leading provider of innovative MEP
                engineering and energy solutions, delivering sustainable
                infrastructure and transforming the built environment through
                excellence, technology, and integrity."
              </p>
            </div>
            <div className="mv-card mission">
              <div className="mv-icon">🎯</div>
              <h3>Our Mission</h3>
              <p>
                "At Bereshit Global, our mission is to design, build, and manage
                world-class MEP systems and energy solutions that optimize
                comfort, efficiency, and sustainability. We achieve this by
                combining technical expertise, innovative technologies, and a
                commitment to quality, ensuring we consistently deliver value to
                our clients and stakeholders."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our History */}
      <section className="our-history">
        <div className="container">
          <div className="section-header">
            <h2>Our History</h2>
            <p>From humble beginnings to industry leaders</p>
          </div>
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-year">2009</div>
              <div className="timeline-content">
                <h3>Foundation</h3>
                <p>
                  Bereshit Global was founded with a vision to redefine MEP
                  engineering and construction standards in Nigeria and beyond.
                </p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-year">2012</div>
              <div className="timeline-content">
                <h3>Expansion</h3>
                <p>
                  Expanded our service offerings to include energy audits and
                  renewable energy solutions.
                </p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-year">2015</div>
              <div className="timeline-content">
                <h3>Growth</h3>
                <p>
                  Established partnerships with leading technology providers for
                  smart building integration.
                </p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-year">2020</div>
              <div className="timeline-content">
                <h3>Innovation</h3>
                <p>
                  Launched our advanced home and office automation division,
                  bringing cutting-edge technology to our clients.
                </p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-year">2024</div>
              <div className="timeline-content">
                <h3>Today</h3>
                <p>
                  Recognized as a trusted partner for innovative, reliable, and
                  sustainable engineering solutions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="core-values">
        <div className="container">
          <div className="section-header">
            <h2>Our Core Values</h2>
            <p>The principles that guide everything we do</p>
          </div>
          <div className="values-grid">
            <div className="value-item">
              <div className="value-icon">⭐</div>
              <h3>Excellence</h3>
              <p>
                We deliver top-quality engineering solutions that exceed client
                expectations.
              </p>
            </div>
            <div className="value-item">
              <div className="value-icon">💡</div>
              <h3>Innovation</h3>
              <p>
                We embrace emerging technologies and forward-thinking
                approaches.
              </p>
            </div>
            <div className="value-item">
              <div className="value-icon">🤝</div>
              <h3>Integrity</h3>
              <p>
                We maintain the highest ethical standards, building trust with
                our clients.
              </p>
            </div>
            <div className="value-item">
              <div className="value-icon">🌱</div>
              <h3>Sustainability</h3>
              <p>
                We champion energy-efficient, eco-friendly, and cost-effective
                solutions.
              </p>
            </div>
            <div className="value-item">
              <div className="value-icon">👥</div>
              <h3>Collaboration</h3>
              <p>
                We foster strong partnerships and teamwork across disciplines.
              </p>
            </div>
            <div className="value-item">
              <div className="value-icon">🎯</div>
              <h3>Client-Centricity</h3>
              <p>
                Every decision we make is focused on creating maximum value for
                our clients.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Promise */}
      <section className="our-promise">
        <div className="container">
          <div className="promise-content">
            <div className="promise-text">
              <h2>Our Promise to Clients</h2>
              <p>
                At Bereshit Global, we don't just design and construct — we
                deliver solutions. By combining engineering expertise,
                cutting-edge technologies, and personalized client engagement,
                we ensure that every project is executed on time, within budget,
                and to the highest standards.
              </p>
              <div className="promise-list">
                <div className="promise-item">
                  <span className="checkmark">✓</span>
                  <span>Expertise in design + build MEP solutions</span>
                </div>
                <div className="promise-item">
                  <span className="checkmark">✓</span>
                  <span>
                    Proven track record on residential, commercial, and
                    industrial projects
                  </span>
                </div>
                <div className="promise-item">
                  <span className="checkmark">✓</span>
                  <span>
                    Integration of sustainability, smart technologies, and cost
                    efficiency
                  </span>
                </div>
              </div>
            </div>
            <div className="promise-image">
              <div className="image-placeholder">
                <div className="tech-icon">⚡</div>
                <div className="tech-icon">🔧</div>
                <div className="tech-icon">🌞</div>
                <div className="tech-icon">🏢</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="leadership-team">
        <div className="container">
          <div className="section-header">
            <h2>Our Leadership Team</h2>
            <p>Experienced professionals driving our success</p>
          </div>
          <div className="team-grid">
            <div className="team-member">
              <div className="member-image"></div>
              <h3>John Doe</h3>
              <p className="position">Chief Executive Officer</p>
              <p className="bio">
                20+ years of experience in MEP engineering and project
                management.
              </p>
            </div>
            <div className="team-member">
              <div className="member-image"></div>
              <h3>Jane Smith</h3>
              <p className="position">Technical Director</p>
              <p className="bio">
                Expert in sustainable design and energy-efficient solutions.
              </p>
            </div>
            <div className="team-member">
              <div className="member-image"></div>
              <h3>Robert Johnson</h3>
              <p className="position">Operations Manager</p>
              <p className="bio">
                Specializes in large-scale MEP projects and implementation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="about-cta">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Work With Us?</h2>
            <p>
              Discover how our innovative MEP solutions can transform your next
              project.
            </p>
            <div className="cta-buttons">
              <button className="btn-primary">Contact Us</button>
              <button className="btn-secondary">View Our Projects</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
