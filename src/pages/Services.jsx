import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Services.css";

const Services = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const services = [
    {
      id: 1,
      category: "design",
      title: "MEP Engineering Design",
      icon: "📐",
      description:
        "Comprehensive design solutions for mechanical, electrical, and plumbing systems.",
      features: [
        "Lighting system designs",
        "HVAC system designs",
        "Electrical power distribution layouts",
        "Plumbing & drainage system designs",
        "Fire detection & suppression designs",
        "Energy-efficient system optimization",
      ],
    },
    {
      id: 2,
      category: "construction",
      title: "MEP Construction & Implementation",
      icon: "🏗️",
      description:
        "End-to-end installation and integration of MEP systems with quality assurance.",
      features: [
        "Full MEP installation and integration",
        "Site supervision and quality control",
        "Testing and commissioning of MEP systems",
        "Equipment procurement and installation",
        "System troubleshooting and optimization",
        "Post-installation support and maintenance",
      ],
    },
    {
      id: 3,
      category: "management",
      title: "MEP Project Management",
      icon: "📊",
      description:
        "Professional project coordination and management for seamless execution.",
      features: [
        "End-to-end project coordination",
        "Construction scheduling & tracking",
        "Stakeholder reporting and progress monitoring",
        "Budget management and cost control",
        "Risk assessment and mitigation",
        "Quality assurance protocols",
      ],
    },
    {
      id: 4,
      category: "costing",
      title: "MEP BEME & Costing",
      icon: "💰",
      description:
        "Accurate budgeting and cost evaluation for engineering projects.",
      features: [
        "Preparation of Bill of Engineering Measurement & Evaluation (BEME)",
        "Accurate costing and budgeting for engineering projects",
        "Cost optimization and value engineering",
        "Material and labor cost analysis",
        "Tender documentation preparation",
        "Cost-benefit analysis reports",
      ],
    },
    {
      id: 5,
      category: "energy",
      title: "Energy Audit & Solar-Inverter Systems",
      icon: "☀️",
      description: "Sustainable energy solutions and consumption optimization.",
      features: [
        "Energy consumption assessment and optimization",
        "Off-grid and hybrid solar power solutions",
        "Inverter sizing, installation, and maintenance",
        "Energy efficiency consulting",
        "Renewable energy integration",
        "Energy performance monitoring",
      ],
    },
    {
      id: 6,
      category: "automation",
      title: "Instrumentation & Control Systems",
      icon: "🎛️",
      description:
        "Advanced control systems for industrial and building automation.",
      features: [
        "Industrial automation solutions",
        "Control panel integration",
        "Smart sensors and IoT solutions",
        "Process control systems",
        "Monitoring and data acquisition",
        "System calibration and optimization",
      ],
    },
    {
      id: 7,
      category: "automation",
      title: "Home & Office Automation",
      icon: "🏠",
      description:
        "Smart building integration for enhanced comfort and efficiency.",
      features: [
        "Smart lighting & temperature control",
        "Access control & security integration",
        "Voice-controlled and app-based home management",
        "Energy management systems",
        "Audio-visual system integration",
        "Remote monitoring and control",
      ],
    },
    {
      id: 8,
      category: "procurement",
      title: "Procurement & Supply",
      icon: "📦",
      description:
        "Reliable sourcing and supply of MEP equipment and materials.",
      features: [
        "Supply of MEP equipment, tools, and fittings",
        "Vendor management & sourcing of approved products",
        "Quality assurance and testing",
        "Logistics and supply chain management",
        "Inventory management solutions",
        "Technical specifications compliance",
      ],
    },
    {
      id: 9,
      category: "consulting",
      title: "General Engineering Services",
      icon: "🔧",
      description:
        "Comprehensive engineering consultancy and technical solutions.",
      features: [
        "Feasibility studies",
        "Technical consultancy",
        "Retrofitting and upgrade solutions",
        "Code compliance and regulations advisory",
        "Technical documentation",
        "Training and capacity building",
      ],
    },
  ];

  const filteredServices =
    activeCategory === "all"
      ? services
      : services.filter((service) => service.category === activeCategory);

  const categories = [
    { id: "all", name: "All Services" },
    { id: "design", name: "Design" },
    { id: "construction", name: "Construction" },
    { id: "management", name: "Project Management" },
    { id: "costing", name: "Costing" },
    { id: "energy", name: "Energy Solutions" },
    { id: "automation", name: "Automation" },
    { id: "procurement", name: "Procurement" },
    { id: "consulting", name: "Consulting" },
  ];

  return (
    <div className="services-page">
      {/* Hero Section */}
      <section className="services-hero">
        <div className="services-hero-content">
          <h1>Our Services</h1>
          <p>
            Comprehensive MEP engineering solutions for sustainable
            infrastructure development
          </p>
        </div>
      </section>

      {/* Services Overview */}
      <section className="services-overview">
        <div className="container">
          <div className="section-header">
            <h2>Comprehensive MEP Solutions</h2>
            <p>
              We offer end-to-end mechanical, electrical, and plumbing
              engineering services tailored to your specific needs
            </p>
          </div>

          {/* Category Filters */}
          <div className="category-filters">
            {categories.map((category) => (
              <button
                key={category.id}
                className={`filter-btn ${
                  activeCategory === category.id ? "active" : ""
                }`}
                onClick={() => setActiveCategory(category.id)}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* Services Grid */}
          <div className="services-grid">
            {filteredServices.map((service) => (
              <div key={service.id} className="service-card">
                <div className="service-header">
                  <div className="service-icon">{service.icon}</div>
                  <h3>{service.title}</h3>
                </div>
                <p className="service-description">{service.description}</p>
                <div className="service-features">
                  <h4>Key Features:</h4>
                  <ul>
                    {service.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </div>
                <Link to="/contact" className="service-cta">
                  Learn More
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="process-section">
        <div className="container">
          <div className="section-header">
            <h2>Our Process</h2>
            <p>How we deliver exceptional MEP engineering solutions</p>
          </div>
          <div className="process-steps">
            <div className="process-step">
              <div className="step-number">1</div>
              <h3>Consultation</h3>
              <p>
                We begin by understanding your requirements, challenges, and
                objectives.
              </p>
            </div>
            <div className="process-step">
              <div className="step-number">2</div>
              <h3>Design & Planning</h3>
              <p>
                Our experts create detailed designs and comprehensive project
                plans.
              </p>
            </div>
            <div className="process-step">
              <div className="step-number">3</div>
              <h3>Implementation</h3>
              <p>
                We execute the project with precision, quality, and attention to
                detail.
              </p>
            </div>
            <div className="process-step">
              <div className="step-number">4</div>
              <h3>Testing & Commissioning</h3>
              <p>
                Rigorous testing ensures all systems operate at peak
                performance.
              </p>
            </div>
            <div className="process-step">
              <div className="step-number">5</div>
              <h3>Support & Maintenance</h3>
              <p>
                Ongoing support and maintenance services to ensure long-term
                reliability.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="services-cta">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Discuss Your Project?</h2>
            <p>
              Contact us today to learn how our MEP engineering solutions can
              benefit your next project.
            </p>
            <div className="cta-buttons">
              <Link to="/contact" className="btn-primary">
                Request a Quote
              </Link>
              <Link to="/contact" className="btn-secondary">
                Schedule Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
