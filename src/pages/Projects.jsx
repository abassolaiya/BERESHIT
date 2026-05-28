import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import "../styles/Projects.css";
import carosel4 from "../Images/crc.jpeg";
import ind from "../Images/ind.jpeg";
import asuu from "../Images/asuu.jpeg";
import indus from "../Images/indus.jpeg";
import res from "../Images/res.jpeg";
import ressi from "../Images/ressi.jpeg";
import comm from "../Images/comm.jpeg";
import ikoyi from "../Images/ikoyi.jpeg";

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [selectedProject, setSelectedProject] = useState(null);

  // SEO: Structured data for the portfolio
  const generateStructuredData = () => {
    return {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      name: "MEP Engineering Project Portfolio - Bereshit Nigeria",
      description:
        "Portfolio of completed MEP engineering projects across commercial, residential, industrial, institutional, and hospitality sectors in Lagos, Ibadan, Ogun State, and nationwide Nigeria.",
      url: "https://www.bereshit.com/projects",
      provider: {
        "@type": "LocalBusiness",
        name: "Bereshit",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Ibadan",
          addressRegion: "Oyo",
          addressCountry: "NG",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: "7.3775",
          longitude: "3.9470",
        },
        areaServed: ["Lagos", "Oyo", "Ogun", "Abuja", "Nationwide"],
        telephone: "+234-XXX-XXX-XXXX",
      },
      hasPart: projects.map((project) => ({
        "@type": "CreativeWork",
        name: project.title,
        description: project.description,
        locationCreated: project.location,
        keywords: `${project.category}, MEP engineering, ${project.location}`,
      })),
    };
  };

  const projects = [
    {
      id: 1,
      title: "Christian Retreat Center, Ikorodu, Lagos",
      category: "hospitality",
      type: "MEP Design & Installation",
      image: carosel4,
      description:
        "Complete MEP design and installation for a Multi-Building Facility in Ikorodu, Lagos, Nigeria.",
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
      size: "45,000 sqm",
      completion: "2025",
      city: "Lagos",
      state: "Lagos",
      coordinates: { lat: 6.5244, lng: 3.3792 },
      seoKeywords:
        "MEP engineering Lagos, HVAC installation Ikorodu, electrical design Nigeria",
    },
    {
      id: 2,
      title: "Residential Apartment - Adron City Parks and Gardens",
      category: "residential",
      type: "MEP Project Management",
      image: res,
      description:
        "MEP Project Management at Adron City Parks and Gardens, Asejire, Ibadan, Oyo State.",
      features: [
        "MEP Systems Installation",
        "Energy audit and assessment",
        "Solar energy integration",
        "Smart home automation",
        "Plumbing Systems",
      ],
      location: "Asejire, Ibadan, Oyo State, Nigeria",
      duration: "16 months",
      size: "500 sqm",
      completion: "2026",
      city: "Ibadan",
      state: "Oyo",
      coordinates: { lat: 7.3775, lng: 3.947 },
      seoKeywords:
        "residential MEP Ibadan, smart home automation Nigeria, solar energy integration Oyo",
    },
    {
      id: 3,
      title: "Residential Apartment - Basorun Luxury Residence",
      category: "residential",
      type: "MEP Design, Construction, and Project Management",
      image: ressi,
      description:
        "Contemporary MEP Systems for 21st Century Residence in Basorun, Ibadan, Oyo State.",
      features: [
        "MEP Systems Installation",
        "Energy audit and assessment",
        "Solar energy integration",
        "Smart Home Automation",
        "Plumbing and HVAC System",
      ],
      location: "Basorun, Ibadan, Oyo State, Nigeria",
      duration: "24 months",
      size: "1,200 sqm",
      completion: "2026",
      city: "Ibadan",
      state: "Oyo",
      coordinates: { lat: 7.4167, lng: 3.9167 },
      seoKeywords:
        "luxury home MEP Ibadan, HVAC installation Oyo, smart home electrical Nigeria",
    },
    {
      id: 4,
      title: "Ikoyi Luxury Apartments",
      category: "residential",
      type: "MEP Construction, and Project Management",
      image: ikoyi,
      description:
        "Contemporary MEP Systems for 21st Century Residence in Ikoyi, Lagos, Nigeria.",
      features: [
        "MEP Systems Installation",
        "Smart Home Automation",
        "Plumbing and HVAC System",
        "Sewage and Waste Management System",
      ],
      location: "Ikoyi, Lagos, Nigeria",
      duration: "Ongoing",
      size: "1,500 sqm",
      completion: "In-view",
      city: "Lagos",
      state: "Lagos",
      coordinates: { lat: 6.4485, lng: 3.4359 },
      seoKeywords:
        "luxury apartment MEP Lagos, smart home automation Ikoyi, HVAC design Lagos",
    },
    {
      id: 5,
      title: "ASUU Secretariat Complex and Scholars' Chalet",
      category: "institutional",
      type: "Electrical Engineering Design and Project Management",
      image: asuu,
      description:
        "Complete Electrical Engineering solutions for an institutional facility at UI Extension, Ajibode, Ibadan, Oyo State.",
      features: [
        "Complete Electrical system design",
        "Home automation integration",
        "Data and Networking System",
        "Energy Management System",
        "Renewable energy systems",
      ],
      location: "UI Extension, Ajibode, Ibadan, Oyo State, Nigeria",
      duration: "36 months",
      size: "20,000 sqm",
      completion: "2023",
      city: "Ibadan",
      state: "Oyo",
      coordinates: { lat: 7.4433, lng: 3.9014 },
      seoKeywords:
        "institutional electrical design Ibadan, renewable energy Nigeria, data networking Oyo",
    },
    {
      id: 6,
      title: "Faith-Life FeedMills",
      category: "industrial",
      type: "Power System Installation",
      image: ind,
      description:
        "Feed Mill Equipment Power Installation in Akinyele, Ibadan, Oyo State.",
      features: [
        "Industrial cable routing and containment",
        "Solar power system installation",
        "Installation of single phase and 3 phase electric motors",
      ],
      location: "Akinyele, Ibadan, Oyo State, Nigeria",
      duration: "3 months",
      size: "20,000 sqm",
      completion: "2025",
      city: "Ibadan",
      state: "Oyo",
      coordinates: { lat: 7.5333, lng: 3.9 },
      seoKeywords:
        "industrial power installation Ibadan, solar power Nigeria, electric motor installation Oyo",
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
      location: "Sagamu, Ogun State, Nigeria",
      duration: "Ongoing",
      size: "18,000 sqm",
      completion: "2026",
      city: "Sagamu",
      state: "Ogun",
      coordinates: { lat: 6.8485, lng: 3.6466 },
      seoKeywords:
        "commercial MEP Ogun, HVAC installation Sagamu, electrical design Ogun State",
    },
    {
      id: 8,
      title: "The Lights Village, Ibadan",
      category: "commercial",
      type: "MEP Design & Installation",
      image: indus,
      description:
        "Comprehensive MEP design and installation for a commercial development in Ibadan, Oyo State, focused on efficiency, reliability, and modern building standards.",
      features: [
        "Energy-efficient lighting design",
        "Infrastructure coordination and system integration",
        "HVAC system design and installation",
        "Electrical power distribution system",
        "Plumbing and water reticulation systems",
        "Fire protection systems",
      ],
      location: "Ibadan, Oyo State, Nigeria",
      duration: "14 months",
      size: "450,000 sqm",
      completion: "2026",
      city: "Ibadan",
      state: "Oyo",
      coordinates: { lat: 7.3775, lng: 3.947 },
      seoKeywords:
        "commercial MEP Ibadan, HVAC design Oyo, electrical installation Nigeria",
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
    // Track modal view for analytics (optional)
    if (typeof window.gtag !== "undefined") {
      window.gtag("event", "view_project", {
        project_title: project.title,
        project_category: project.category,
        project_location: project.location,
      });
    }
  };

  const closeProjectModal = () => {
    setSelectedProject(null);
  };

  // Get unique locations for GEO keywords
  const uniqueLocations = [...new Set(projects.map((p) => p.city))];
  const locationKeywords = uniqueLocations.join(", ");

  return (
    <>
      <Helmet>
        {/* Primary SEO Tags */}
        <title>
          Bereshit Project Portfolio | MEP Engineering Projects in Lagos,
          Ibadan, Ogun, Nigeria
        </title>
        <meta
          name="title"
          content="MEP Engineering Project Portfolio - Commercial, Residential, Industrial Projects in Nigeria"
        />
        <meta
          name="description"
          content={`Explore Bereshit's comprehensive MEP engineering project portfolio across ${locationKeywords} and nationwide. View our completed commercial, residential, industrial, institutional, and hospitality projects featuring HVAC, electrical, plumbing, and energy solutions.`}
        />
        <meta
          name="keywords"
          content={`MEP projects Nigeria, electrical installation portfolio, HVAC projects Lagos, commercial MEP Ogun, residential electrical Ibadan, industrial power systems, institutional electrical design, Bereshit projects, MEP engineering ${locationKeywords}, building services Nigeria`}
        />

        {/* GEO Optimization */}
        <meta name="geo.region" content="NG" />
        <meta name="geo.placename" content="Nigeria" />
        <meta name="geo.position" content="9.081999;8.675277" />
        <meta name="ICBM" content="9.081999, 8.675277" />
        <meta name="geo.region" content="NG-LA" />
        <meta name="geo.region" content="NG-OY" />
        <meta name="geo.region" content="NG-OG" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.bereshit.com/projects" />
        <meta
          property="og:title"
          content="Bereshit MEP Engineering Project Portfolio - Nigeria's Leading Engineering Firm"
        />
        <meta
          property="og:description"
          content={`View our completed MEP engineering projects across commercial, residential, industrial, institutional, and hospitality sectors in ${locationKeywords} and nationwide. Professional HVAC, electrical, and plumbing solutions.`}
        />
        <meta
          property="og:image"
          content="https://www.bereshit.com/images/projects-og.jpg"
        />
        <meta property="og:site_name" content="Bereshit MEP Engineering" />
        <meta property="og:locale" content="en_NG" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://www.bereshit.com/projects" />
        <meta name="twitter:title" content="Bereshit MEP Project Portfolio" />
        <meta
          name="twitter:description"
          content={`MEP engineering projects across ${locationKeywords}, Nigeria. Commercial, residential, industrial, and institutional solutions.`}
        />
        <meta
          name="twitter:image"
          content="https://www.bereshit.com/images/projects-og.jpg"
        />

        {/* Canonical URL */}
        <link rel="canonical" href="https://www.bereshit.com/projects" />

        {/* Alternate Language Versions */}
        <link
          rel="alternate"
          href="https://www.bereshit.com/projects"
          hrefLang="en"
        />
        <link
          rel="alternate"
          href="https://www.bereshit.com/proyectos"
          hrefLang="es"
        />

        {/* Additional SEO */}
        <meta name="robots" content="index, follow, max-image-preview:large" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="7 days" />
        <meta name="distribution" content="global" />
        <meta name="rating" content="General" />
      </Helmet>

      {/* Structured Data JSON-LD */}
      <script type="application/ld+json">
        {JSON.stringify(generateStructuredData())}
      </script>

      {/* Individual Project Structured Data */}
      {selectedProject && (
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CreativeWork",
            name: selectedProject.title,
            description: selectedProject.description,
            locationCreated: {
              "@type": "Place",
              name: selectedProject.location,
              address: {
                "@type": "PostalAddress",
                addressLocality: selectedProject.city,
                addressRegion: selectedProject.state,
                addressCountry: "NG",
              },
            },
            provider: {
              "@type": "LocalBusiness",
              name: "Bereshit",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Ibadan",
                addressRegion: "Oyo",
                addressCountry: "NG",
              },
            },
          })}
        </script>
      )}

      <div className="projects-page">
        {/* Hero Section */}
        <section className="projects-hero">
          <div className="projects-hero-content">
            <h1>Our MEP Engineering Projects</h1>
            <p>
              Showcasing our expertise in delivering innovative MEP solutions
              across commercial, residential, industrial, institutional, and
              hospitality sectors in Nigeria
            </p>
          </div>
        </section>

        {/* Projects Gallery */}
        <section className="projects-gallery">
          <div className="container">
            <div className="section-header">
              <h2>Project Portfolio</h2>
              <p>
                Explore our completed MEP engineering projects across different
                sectors and locations in {locationKeywords} and nationwide
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
                  aria-label={`Filter projects by ${filter.name}`}
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
                  role="button"
                  tabIndex={0}
                  onKeyPress={(e) =>
                    e.key === "Enter" && openProjectModal(project)
                  }
                  aria-label={`View details for ${project.title}`}
                >
                  <div className="project-image">
                    <img
                      src={project.image}
                      alt={`${project.title} - ${project.type} MEP project in ${project.location}`}
                      className="carousel-image"
                      loading="lazy"
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
                      <span className="completion">
                        📅 {project.completion}
                      </span>
                    </div>
                    <button
                      className="project-btn"
                      aria-label={`View details of ${project.title}`}
                    >
                      View Details
                    </button>
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
                <p>Projects Completed Across Nigeria</p>
              </div>
              <div className="stat-item">
                <h3>15+</h3>
                <p>Years of MEP Engineering Experience</p>
              </div>
              <div className="stat-item">
                <h3>15</h3>
                <p>States in Nigeria Served</p>
              </div>
              <div className="stat-item">
                <h3>98%</h3>
                <p>Client Satisfaction Rate</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="projects-cta">
          <div className="container">
            <div className="cta-content">
              <h2>Start Your MEP Engineering Project With Us</h2>
              <p>
                Ready to discuss your next MEP engineering project in Nigeria?
                Contact us for a professional consultation.
              </p>
              <div className="cta-buttons">
                <Link
                  to="/contact"
                  className="btn-primary"
                  aria-label="Get a quote for your MEP project"
                >
                  Get a Quote
                </Link>
                <Link
                  to="/services"
                  className="btn-secondary"
                  aria-label="View our MEP engineering services"
                >
                  View Our Services
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <div
          className="project-modal"
          onClick={closeProjectModal}
          role="dialog"
          aria-label={`Project details for ${selectedProject.title}`}
        >
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button
              className="close-modal"
              onClick={closeProjectModal}
              aria-label="Close modal"
            >
              ×
            </button>

            <div className="modal-header">
              <div className="modal-image">
                <img
                  src={selectedProject.image}
                  alt={`${selectedProject.title} - ${selectedProject.type} in ${selectedProject.location}`}
                  className="carousel-image"
                  loading="lazy"
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
                  <h3>Key Features & MEP Solutions</h3>
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
                    <h4>Project Duration</h4>
                    <p>⏱️ {selectedProject.duration}</p>
                  </div>
                  <div className="meta-item">
                    <h4>Project Size</h4>
                    <p>📐 {selectedProject.size}</p>
                  </div>
                  <div className="meta-item">
                    <h4>Completion Date</h4>
                    <p>📅 {selectedProject.completion}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="modal-footer">
              <Link
                to="/contact"
                className="btn-primary"
                aria-label="Request a similar MEP project"
              >
                Request Similar Project
              </Link>
              <button
                className="btn-secondary"
                onClick={closeProjectModal}
                aria-label="Close modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Projects;
