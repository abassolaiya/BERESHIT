import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Projects.css";
import carosel4 from "../Images/crc.jpeg";
import ind from "../Images/ind.jpeg";
import asuu from "../Images/asuu.jpeg";
import indus from "../Images/indus.jpeg";
import res from "../Images/res.jpeg";
import ressi from "../Images/ressi.jpeg";
import comm from "../Images/comm.jpeg";

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: "Christian Retreat Center, Ikorodu, Lagos",
      category: "hospitality",
      type: "MEP Design & Installation",
      image: carosel4,
      description:
        "Complete MEP design and installation for a Multi-Building Facility in Ikorodu, Lagos.",
      features: [
        "HVAC system design and installation",
        "Electrical power distribution",
        "Plumbing and fire protection systems",
        "Energy Management System",
        "Energy-efficient lighting design",
        "Building automation integration",
      ],
      location: "Ikorodu, Lagos, Nigeria",
      duration: "18 months",
      size: "4,5000 sqm",
      completion: "2025",
    },
    {
      id: 2,
      title: "Residential Apartment",
      category: "residential",
      type: "MEP Project Management",
      image: res,
      description: "Adron City Parks and Gardens, Asejire, Ibadan",
      features: [
        "MEP Systems Installation",
        "Energy audit and assessment",
        "Solar energy integration",
        "Smart home automation",
        "Plumbing Systems",
      ],
      location: "Oyo state, Nigeria",
      duration: "16 months",
      size: "500 sqm",
      completion: "2026",
    },
    {
      id: 3,
      title: "Residential Apartment",
      category: "residential",
      type: "MEP Design, Construction, and Project Management",
      image: ressi,
      description:
        "Contemporary MEP Systems for 21st Century Residence, Basorun, Ibadan",
      features: [
        "MEP Systems Installation",
        "Energy audit and assessment",
        "Solar energy integration",
        "Smart Home Automation",
        "Plumbing and HVAC System",
      ],
      location: "Oyo state, Nigeria",
      duration: "24 months",
      size: "1,200 sqm",
      completion: "2026",
    },
    {
      id: 4,
      title: "Ikoyi Luxury Apartments",
      category: "residential",
      type: "MEP Construction, and Project Management",
      image: "🏛️",
      description:
        "Contemporary MEP Systems for 21st Century Residence, Ikoyi, Lagos",
      features: [
        "MEP Systems Installation",
        "Smart Home Automation",
        "Plumbing and HVAC System",
        "Sewage and Waste Management System",
      ],
      location: "Lagos, Nigeria",
      duration: "Ongoing",
      size: "1,500 sqm",
      completion: "In-view",
    },
    {
      id: 5,
      title: "ASUU Secretariat Complex and Scholars' Chalet",
      category: "institutional",
      type: "Electrical Engineering Design and Project Management",
      image: asuu,
      description:
        "Complete Electrical Engineering solutions for a institutional facility in UI Extension, Ajibode, Ibadan.",
      features: [
        "Complete Electrical system design",
        "Home automation integration",
        "Data and Networking System",
        "Energy Management System",
        "Renewable energy systems",
      ],
      location: "Oyo state, Nigeria",
      duration: "36 months",
      size: "20,000 sqm",
      completion: "2023",
    },
    {
      id: 6,
      title: "Faith-Life FeedMills",
      category: "industrial",
      type: "Power System Installation",
      image: ind,
      description: "Feed Mill Equipment Power Installation, Akinyele, Ibadan",
      features: [
        "Industrial cable routing and containment",
        "Solar power system installation",
        "Installation of single phase and 3 phase electric motors",
      ],
      location: "Oyo state, Nigeria",
      duration: "3 months",
      size: "20,000 sqm",
      completion: "2025",
    },
    {
      id: 7,
      title: "MBT Plaza, Sagamu, Ogun State",
      category: "commercial",
      type: "MEP Design & Installation",
      image: comm,
      description:
        "Comprehensive MEP design and installation for a commercial plaza in Sagamu, Ogun State, delivering efficient, reliable, and scalable building services to support retail and business operations.",
      features: [
        "Electrical power distribution system",
        "Energy-efficient lighting design",
        "HVAC system design and installation",
        "Plumbing and water supply systems",
        "Fire protection systems",
        "Infrastructure coordination and system integration",
      ],
      location: "Ogun state, Nigeria",
      duration: "Ongoing",
      size: "18,000 sqm",
      completion: "2026",
    },
    {
      id: 8,
      title: "The Lights Village, Ibadan",
      category: "commercial",
      type: "MEP Design & Installation",
      image: indus,
      description:
        "Comprehensive MEP design and installation for a commercial development in Ibadan, focused on efficiency, reliability, and modern building standards.",
      features: [
        "Energy-efficient lighting design",
        "Infrastructure coordination and system integration",
        "HVAC system design and installation",
        "Electrical power distribution system",
        "Plumbing and water reticulation systems",
        "Fire protection systems",
      ],
      location: "Oyo state, Nigeria",
      duration: "14 months",
      size: "450,000 sqm",
      completion: "2026",
    },
  ];

  const filters = [
    { id: "all", name: "All Projects" },
    { id: "commercial", name: "Commercial" },
    { id: "residential", name: "Residential" },
    { id: "industrial", name: "Industrial" },
    { id: "institutional", name: "Institutional" },
    { id: "hospitality", name: "Hospitality" },
  ];

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  const openProjectModal = (project) => {
    setSelectedProject(project);
  };

  const closeProjectModal = () => {
    setSelectedProject(null);
  };

  return (
    <div className="projects-page">
      {/* Hero Section */}
      <section className="projects-hero">
        <div className="projects-hero-content">
          <h1>Our Projects</h1>
          <p>
            Showcasing our expertise in delivering innovative MEP solutions
            across various sectors
          </p>
        </div>
      </section>

      {/* Projects Gallery */}
      <section className="projects-gallery">
        <div className="container">
          <div className="section-header">
            <h2>Project Portfolio</h2>
            <p>
              Explore our completed projects across different sectors and
              locations
            </p>
          </div>

          {/* Filter Buttons */}
          <div className="project-filters">
            {filters.map((filter) => (
              <button
                key={filter.id}
                className={`filter-btn ${
                  activeFilter === filter.id ? "active" : ""
                }`}
                onClick={() => setActiveFilter(filter.id)}
              >
                {filter.name}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="projects-grid">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="project-card"
                onClick={() => openProjectModal(project)}
              >
                <div className="project-image">
                  <img
                    src={project.image}
                    alt={project.id}
                    className="carousel-image"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src =
                        "https://via.placeholder.com/800x500?text=Image+Not+Found";
                    }}
                  />
                </div>
                <div className="project-content">
                  <span className="project-category">{project.category}</span>
                  <h3>{project.title}</h3>
                  <p className="project-type">{project.type}</p>
                  <p className="project-description">{project.description}</p>
                  <div className="project-meta">
                    <span className="location">📍 {project.location}</span>
                    <span className="completion">📅 {project.completion}</span>
                  </div>
                  <button className="project-btn">View Details</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="projects-stats">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-item">
              <h3>100+</h3>
              <p>Projects Completed</p>
            </div>
            <div className="stat-item">
              <h3>15+</h3>
              <p>Years Experience</p>
            </div>
            <div className="stat-item">
              <h3>15</h3>
              <p>States in Nigeria</p>
            </div>
            <div className="stat-item">
              <h3>98%</h3>
              <p>Client Satisfaction</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="projects-cta">
        <div className="container">
          <div className="cta-content">
            <h2>Start Your Project With Us</h2>
            <p>
              Ready to discuss your next MEP engineering project? Contact us for
              a consultation.
            </p>
            <div className="cta-buttons">
              {/* <button className="btn-primary">Get a Quote</button>
              <button className="btn-secondary">View Our Services</button> */}
              <Link to="/contact" className="btn-primary">
                Get a Quote
              </Link>
              <Link to="/services" className="btn-secondary">
                View Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Project Modal */}
      {selectedProject && (
        <div className="project-modal" onClick={closeProjectModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-modal" onClick={closeProjectModal}>
              ×
            </button>

            <div className="modal-header">
              <div className="modal-image">
                {" "}
                <img
                  src={selectedProject.image}
                  alt={selectedProject.id}
                  className="carousel-image"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src =
                      "https://via.placeholder.com/800x500?text=Image+Not+Found";
                  }}
                />
              </div>
              <div className="modal-title">
                <span className="project-category">
                  {selectedProject.category}
                </span>
                <h2>{selectedProject.title}</h2>
                <p className="project-type">{selectedProject.type}</p>
              </div>
            </div>

            <div className="modal-body">
              <div className="project-details">
                <div className="detail-section">
                  <h3>Project Overview</h3>
                  <p>{selectedProject.description}</p>
                </div>

                <div className="detail-section">
                  <h3>Key Features</h3>
                  <ul>
                    {selectedProject.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </div>

                <div className="project-meta-grid">
                  <div className="meta-item">
                    <h4>Location</h4>
                    <p>📍 {selectedProject.location}</p>
                  </div>
                  <div className="meta-item">
                    <h4>Duration</h4>
                    <p>⏱️ {selectedProject.duration}</p>
                  </div>
                  <div className="meta-item">
                    <h4>Size</h4>
                    <p>📐 {selectedProject.size}</p>
                  </div>
                  <div className="meta-item">
                    <h4>Completion</h4>
                    <p>📅 {selectedProject.completion}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="modal-footer">
              <button className="btn-primary">Request Similar Project</button>
              <button className="btn-secondary" onClick={closeProjectModal}>
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;
