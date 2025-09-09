import React, { useState } from "react";
import "../styles/Projects.css";

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: "Lagos Commercial Complex",
      category: "commercial",
      type: "MEP Design & Installation",
      image: "🏢",
      description:
        "Complete MEP design and installation for a 15-story commercial complex in Lagos.",
      features: [
        "HVAC system design and installation",
        "Electrical power distribution",
        "Plumbing and fire protection systems",
        "Energy-efficient lighting design",
        "Building automation integration",
      ],
      location: "Lagos, Nigeria",
      duration: "18 months",
      size: "25,000 sqm",
      completion: "2023",
    },
    {
      id: 2,
      title: "Abuja Residential Tower",
      category: "residential",
      type: "Energy Efficiency Upgrade",
      image: "🏘️",
      description:
        "Energy efficiency retrofit and MEP optimization for a luxury residential tower.",
      features: [
        "Energy audit and assessment",
        "HVAC system optimization",
        "Solar energy integration",
        "Smart home automation",
        "Water conservation systems",
      ],
      location: "Abuja, Nigeria",
      duration: "12 months",
      size: "15,000 sqm",
      completion: "2022",
    },
    {
      id: 3,
      title: "Ikeja Corporate Office",
      category: "commercial",
      type: "Smart Automation System",
      image: "🏛️",
      description:
        "Complete smart building automation system for a corporate headquarters.",
      features: [
        "Integrated building management system",
        "Smart lighting and climate control",
        "Access control and security systems",
        "Energy monitoring and optimization",
        "IoT sensor network deployment",
      ],
      location: "Ikeja, Nigeria",
      duration: "8 months",
      size: "8,000 sqm",
      completion: "2023",
    },
    {
      id: 4,
      title: "Port Harcourt Industrial Facility",
      category: "industrial",
      type: "HVAC Optimization",
      image: "🏭",
      description:
        "HVAC system redesign and optimization for an industrial manufacturing facility.",
      features: [
        "Industrial ventilation system design",
        "Process cooling systems",
        "Energy recovery systems",
        "Dust extraction and filtration",
        "Climate control automation",
      ],
      location: "Port Harcourt, Nigeria",
      duration: "10 months",
      size: "12,000 sqm",
      completion: "2022",
    },
    {
      id: 5,
      title: "Victoria Island Luxury Apartments",
      category: "residential",
      type: "MEP Design & Construction",
      image: "🏢",
      description:
        "Complete MEP solutions for a luxury apartment complex in Victoria Island.",
      features: [
        "Complete MEP system design",
        "High-efficiency HVAC installation",
        "Advanced plumbing systems",
        "Home automation integration",
        "Renewable energy systems",
      ],
      location: "Victoria Island, Lagos",
      duration: "14 months",
      size: "20,000 sqm",
      completion: "2023",
    },
    {
      id: 6,
      title: "Lekki Shopping Mall",
      category: "commercial",
      type: "Energy Audit & Solar Solutions",
      image: "🛍️",
      description:
        "Comprehensive energy audit and solar power integration for a large shopping mall.",
      features: [
        "Detailed energy consumption analysis",
        "Solar power system installation",
        "Energy-efficient lighting retrofit",
        "HVAC system optimization",
        "Energy management system",
      ],
      location: "Lekki, Lagos",
      duration: "9 months",
      size: "30,000 sqm",
      completion: "2022",
    },
    {
      id: 7,
      title: "Kaduna Educational Facility",
      category: "institutional",
      type: "MEP Installation",
      image: "🎓",
      description:
        "MEP system installation for a new university campus building.",
      features: [
        "Classroom HVAC systems",
        "Laboratory specialized ventilation",
        "Campus-wide electrical distribution",
        "Water conservation systems",
        "Fire detection and protection",
      ],
      location: "Kaduna, Nigeria",
      duration: "11 months",
      size: "18,000 sqm",
      completion: "2023",
    },
    {
      id: 8,
      title: "Asaba Hospital Complex",
      category: "healthcare",
      type: "Specialized MEP Systems",
      image: "🏥",
      description:
        "Specialized MEP systems for a healthcare facility with critical environment requirements.",
      features: [
        "Medical gas systems installation",
        "Critical environment HVAC",
        "Backup power systems",
        "Infection control ventilation",
        "Building automation system",
      ],
      location: "Asaba, Nigeria",
      duration: "16 months",
      size: "22,000 sqm",
      completion: "2022",
    },
  ];

  const filters = [
    { id: "all", name: "All Projects" },
    { id: "commercial", name: "Commercial" },
    { id: "residential", name: "Residential" },
    { id: "industrial", name: "Industrial" },
    { id: "institutional", name: "Institutional" },
    { id: "healthcare", name: "Healthcare" },
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
                <div className="project-image">{project.image}</div>
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
              <h3>50+</h3>
              <p>Projects Completed</p>
            </div>
            <div className="stat-item">
              <h3>15+</h3>
              <p>Years Experience</p>
            </div>
            <div className="stat-item">
              <h3>12</h3>
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
              <button className="btn-primary">Get a Quote</button>
              <button className="btn-secondary">View Our Services</button>
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
              <div className="modal-image">{selectedProject.image}</div>
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
