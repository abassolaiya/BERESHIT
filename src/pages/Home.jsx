import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import carosel1 from "../Images/Carousel 01.jpg";
import carosel2 from "../Images/Carousel 02.jpg";
import carosel3 from "../Images/Carousel 03.jpg";
import carosel4 from "../Images/Carousel 04.jpg";
import caro5 from "../Images/Caro5.jpeg";
import caro6 from "../Images/Caro6.jpeg";

import ind from "../Images/ind.jpeg";
import asuu from "../Images/asuu.jpeg";
import indus from "../Images/indus.jpeg";
import res from "../Images/res.jpeg";
import ressi from "../Images/ressi.jpeg";
import comm from "../Images/comm.jpeg";

const Home = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeService, setActiveService] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    // Scroll animation initialization
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-in");
        }
      });
    }, observerOptions);

    document
      .querySelectorAll(".fade-in, .slide-in-left, .slide-in-right, .zoom-in")
      .forEach((el) => {
        observer.observe(el);
      });

    // Handle scroll event for navbar
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    // Auto-rotate carousel
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % 5);
    }, 3000);

    window.addEventListener("scroll", handleScroll);

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
      clearInterval(interval);
    };
  }, []);

  // Carousel navigation functions
  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % 5);
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + 5) % 5);
  };

  const goToImage = (index) => {
    setCurrentImageIndex(index);
  };

  const services = [
    {
      title: "MEP Engineering Design",
      description:
        "Lighting, HVAC, electrical power distribution, plumbing, fire detection, and energy-efficient system designs.",
      icon: "📐",
    },
    {
      title: "MEP Construction & Implementation",
      description:
        "Full MEP installation, site supervision, quality control, testing, and commissioning.",
      icon: "🏗️",
    },
    {
      title: "MEP Project Management",
      description:
        "End-to-end project coordination, construction scheduling, and progress monitoring.",
      icon: "📊",
    },
    {
      title: "Energy Audit & Solar Systems",
      description:
        "Energy consumption assessment, off-grid/hybrid solar solutions, and inverter installation.",
      icon: "☀️",
    },
    {
      title: "Home & Office Automation",
      description:
        "Smart lighting, temperature control, access control, and security integration.",
      icon: "🏠",
    },
  ];

  const values = [
    {
      title: "Excellence",
      description:
        "We deliver top-quality engineering solutions that exceed client expectations.",
      icon: "⭐",
    },
    {
      title: "Innovation",
      description:
        "We embrace emerging technologies and forward-thinking approaches.",
      icon: "💡",
    },
    {
      title: "Integrity",
      description:
        "We maintain the highest ethical standards, building trust with our clients.",
      icon: "🤝",
    },
    {
      title: "Sustainability",
      description:
        "We champion energy-efficient, eco-friendly, and cost-effective solutions.",
      icon: "🌱",
    },
    {
      title: "Collaboration",
      description:
        "We foster strong partnerships and teamwork across disciplines.",
      icon: "👥",
    },
    {
      title: "Client-Centricity",
      description:
        "Every decision focuses on creating maximum value for our clients.",
      icon: "🎯",
    },
  ];

  const projects = [
    {
      id: 1,
      name: "Christian Retreat Center, Ikorodu, Lagos",
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
      name: "Residential Apartment",
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
      name: "Residential Apartment",
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
      name: "ASUU Secretariat Complex and Scholars' Chalet",
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
  ];

  // Carousel images array
  const carouselImages = [
    {
      src: caro6,
      alt: "Electrical CAD Designs",
      title: "Electrical CAD Designs",
      description:
        "Precision-engineered piping and ducting installations that support efficient fluid transport and optimized airflow systems.",
    },
    {
      src: carosel1,
      alt: "Renewable Energy Systems",
      title: "Renewable Energy Systems",
      description:
        "Precision-driven electrical layouts developed with advanced CAD tools, ensuring efficient power distribution, smart integration, and code-compliant performance.",
    },
    {
      src: carosel2,
      alt: "HVAC System",
      title: "HVAC System",
      description:
        "We deliver efficient and reliable HVAC solutions tailored to meet the comfort, health, and performance requirements of modern buildings",
    },
    {
      src: caro5,
      alt: "Mechanical CAD Designs",
      title: "Mechanical CAD Designs",
      description:
        "Optimized HVAC and plumbing systems modeled with advanced CAD tools, ensuring efficient performance, coordinated layouts, and reliable service delivery.",
    },
    {
      src: carosel3,
      alt: "Water Treatment Systems",
      title: "Water Treatment Systems",
      description:
        "Advanced water purification and treatment systems designed to ensure safe, efficient, and regulatory-compliant water management.",
    },
  ];

  return (
    <div className="App">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-background">
          <div className="hero-overlay"></div>
        </div>
        <div className="hero-content">
          <h1 className="fade-in">
            Innovative MEP Solutions for Sustainable Infrastructure
          </h1>
          <p className="fade-in">
            Delivering excellence in mechanical, electrical, and plumbing
            engineering with cutting-edge technology and unwavering integrity.
          </p>
          <div className="hero-buttons fade-in">
            <button className="btn-primary">Our Services</button>
            <button className="btn-secondary">Request a Quote</button>
          </div>
        </div>
        <div className="scroll-indicator">
          <div className="scroll-line"></div>
        </div>
      </section>

      {/* Image Carousel Section - FIXED */}
      <section className="carousel-section">
        <div className="container">
          <div className="section-header">
            <h2>Our Projects in Action</h2>
            <p>
              Take a closer look at our recent MEP engineering and installation
              projects
            </p>
          </div>

          <div className="carousel-container">
            <div className="carousel-main">
              <button
                className="carousel-arrow carousel-prev"
                onClick={prevImage}
              >
                ❮
              </button>

              <div className="carousel-image-wrapper">
                <img
                  src={carouselImages[currentImageIndex].src}
                  alt={carouselImages[currentImageIndex].alt}
                  className="carousel-image"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src =
                      "https://via.placeholder.com/800x500?text=Image+Not+Found";
                  }}
                />
                <div className="carousel-caption">
                  <h3>{carouselImages[currentImageIndex].title}</h3>
                  <p>{carouselImages[currentImageIndex].description}</p>
                </div>
              </div>

              <button
                className="carousel-arrow carousel-next"
                onClick={nextImage}
              >
                ❯
              </button>
            </div>

            <div className="carousel-thumbnails">
              {carouselImages.map((image, index) => (
                <div
                  key={index}
                  className={`carousel-thumbnail ${currentImageIndex === index ? "active" : ""}`}
                  onClick={() => goToImage(index)}
                >
                  <img
                    src={image.src}
                    alt={`Thumbnail ${index + 1}`}
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src =
                        "https://via.placeholder.com/150x100?text=Thumbnail";
                    }}
                  />
                  <div className="thumbnail-overlay">
                    <span>{index + 1}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="carousel-indicators">
              {carouselImages.map((_, index) => (
                <button
                  key={index}
                  className={`carousel-indicator ${currentImageIndex === index ? "active" : ""}`}
                  onClick={() => goToImage(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-item zoom-in">
              <h3>100+</h3>
              <p>Projects Completed</p>
            </div>
            <div className="stat-item zoom-in">
              <h3>98%</h3>
              <p>Client Satisfaction</p>
            </div>
            <div className="stat-item zoom-in">
              <h3>15+</h3>
              <p>Years of Experience</p>
            </div>
            <div className="stat-item zoom-in">
              <h3>50+</h3>
              <p>Engineers and Technical Expert</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about">
        <div className="container">
          <div className="section-header">
            <h2>About BERESHIT GLOBAL</h2>
            <p>
              Redefining MEP engineering and construction standards in Nigeria
              and beyond
            </p>
          </div>
          <div className="about-content">
            <div className="about-text slide-in-left">
              <h3>Our Vision</h3>
              <p>
                "To become a global leading provider of innovative MEP
                engineering and energy solutions, delivering sustainable
                infrastructure and transforming the built environment through
                excellence, technology, and integrity."
              </p>

              <h3>Our Mission</h3>
              <p>
                "At Bereshit Global, our mission is to design, build, and manage
                world-class MEP systems and energy solutions that optimize
                comfort, efficiency, and sustainability."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services">
        <div className="container">
          <div className="section-header">
            <h2>Our Core Services</h2>
            <p>
              Comprehensive MEP engineering solutions tailored to your needs
            </p>
          </div>
          <div className="services-grid">
            {services.map((service, index) => (
              <div key={index} className="service-card fade-in">
                <div className="service-icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <div className="service-arrow">→</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="values">
        <div className="container">
          <div className="section-header">
            <h2>Our Core Values</h2>
            <p>The principles that guide everything we do</p>
          </div>
          <div className="values-grid">
            {values.map((value, index) => (
              <div key={index} className="value-card fade-in">
                <div className="value-icon">{value.icon}</div>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section - FIXED with white background overlay */}
      <section className="projects">
        <div className="container">
          <div className="section-header">
            <h2>Our Projects</h2>
            <p>Showcasing our expertise in MEP engineering solutions</p>
          </div>
          <div className="projects-grid">
            {projects.map((project, index) => (
              <div key={index} className="project-card zoom-in">
                <div className="project-image">
                  <img
                    src={project.image}
                    alt={project.name}
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src =
                        "https://via.placeholder.com/800x500?text=Image+Not+Found";
                    }}
                  />
                  <div className="project-overlay">
                    <div className="project-content">
                      <h3>{project.name}</h3>
                      <p>{project.type}</p>
                      <button className="project-btn">View Details</button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta">
        <div className="cta-background">
          <div className="cta-overlay"></div>
        </div>
        <div className="cta-content">
          <h2>Ready to Transform Your Infrastructure Projects?</h2>
          <p>
            Contact us today to discuss how our innovative MEP solutions can
            benefit your next project.
          </p>
          <div className="cta-buttons">
            <Link to="/contact" className="btn-secondary">
              Get a Quote
            </Link>
            <Link to="/contact" className="nav-item">
              Schedule Consultation
            </Link>
          </div>
        </div>
      </section>

      <style jsx>{`
        /* Home Page Specific Styles - These only apply to this component */

        /* Carousel Section Styles */
        .carousel-section {
          padding: 4rem 0;
          background-color: var(--light-gray);
        }

        .carousel-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 20px;
        }

        .carousel-main {
          position: relative;
          width: 100%;
          margin-bottom: 30px;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
        }

        .carousel-image-wrapper {
          position: relative;
          width: 100%;
          height: 500px;
          overflow: hidden;
        }

        .carousel-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .carousel-caption {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          background: linear-gradient(to top, rgba(0, 0, 0, 0.8), transparent);
          color: white;
          padding: 30px;
          text-align: left;
        }

        .carousel-caption h3 {
          font-size: 1.5rem;
          margin-bottom: 10px;
          color: white;
        }

        .carousel-caption p {
          font-size: 1rem;
          max-width: 80%;
          color: rgba(255, 255, 255, 0.9);
        }

        .carousel-arrow {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          background: rgba(255, 255, 255, 0.9);
          border: none;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          cursor: pointer;
          font-size: 1.2rem;
          transition: all 0.3s ease;
          z-index: 10;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
        }

        .carousel-arrow:hover {
          background: #ff6b35;
          color: white;
          transform: translateY(-50%) scale(1.05);
        }

        .carousel-prev {
          left: 20px;
        }

        .carousel-next {
          right: 20px;
        }

        .carousel-thumbnails {
          display: flex;
          gap: 15px;
          justify-content: center;
          margin-top: 20px;
          overflow-x: auto;
          padding-bottom: 10px;
        }

        .carousel-thumbnail {
          position: relative;
          width: 100px;
          height: 70px;
          cursor: pointer;
          border-radius: 8px;
          overflow: hidden;
          transition: all 0.3s ease;
          flex-shrink: 0;
        }

        .carousel-thumbnail img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .carousel-thumbnail.active {
          border: 2px solid #ff6b35;
          transform: scale(1.05);
        }

        .thumbnail-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.5);
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-weight: bold;
        }

        .carousel-indicators {
          display: none;
        }

        /* Projects Section Fixed Styles */
        .projects .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 30px;
          margin-top: 40px;
        }

        .projects .project-card {
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
          transition:
            transform 0.3s ease,
            box-shadow 0.3s ease;
        }

        .projects .project-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 40px rgba(0, 0, 0, 0.15);
        }

        .projects .project-image {
          position: relative;
          width: 100%;
          height: 300px;
          overflow: hidden;
          background: linear-gradient(
            135deg,
            var(--primary-blue) 0%,
            #2a8bad 100%
          );
        }

        .projects .project-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }

        .projects .project-card:hover .project-image img {
          transform: scale(1.05);
        }

        .projects .project-overlay {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          background: linear-gradient(
            to top,
            rgba(0, 0, 0, 0.9),
            rgba(0, 0, 0, 0.5),
            transparent
          );
          padding: 20px;
          transition: transform 0.3s ease;
        }

        .projects .project-content {
          color: white;
          padding: 0;
        }

        .projects .project-content h3 {
          font-size: 1.2rem;
          margin-bottom: 5px;
          color: white;
        }

        .projects .project-content p {
          font-size: 0.9rem;
          margin-bottom: 15px;
          color: rgba(255, 255, 255, 0.9);
        }

        .projects .project-btn {
          background: white;
          color: #1a2a3a;
          border: none;
          padding: 8px 20px;
          border-radius: 25px;
          font-size: 0.85rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .projects .project-btn:hover {
          background: #ff6b35;
          color: white;
          transform: translateX(5px);
        }

        /* Responsive adjustments */
        @media (max-width: 768px) {
          .carousel-image-wrapper {
            height: 400px;
          }

          .carousel-caption {
            padding: 20px;
          }

          .carousel-caption h3 {
            font-size: 1.2rem;
          }

          .carousel-caption p {
            font-size: 0.9rem;
            max-width: 100%;
          }

          .carousel-thumbnails {
            gap: 10px;
          }

          .carousel-thumbnail {
            width: 80px;
            height: 60px;
          }

          .projects .projects-grid {
            grid-template-columns: 1fr;
            gap: 20px;
          }

          .projects .project-image {
            height: 250px;
          }
        }

        @media (max-width: 480px) {
          .carousel-image-wrapper {
            height: 300px;
          }

          .carousel-caption {
            padding: 15px;
          }

          .carousel-caption h3 {
            font-size: 1rem;
          }

          .carousel-caption p {
            font-size: 0.8rem;
          }

          .carousel-thumbnail {
            width: 60px;
            height: 50px;
          }
        }
      `}</style>
    </div>
  );
};

export default Home;
