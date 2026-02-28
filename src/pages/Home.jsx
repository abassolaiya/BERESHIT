import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import carosel1 from "../Images/Carousel 01.jpg";
import carosel2 from "../Images/Carousel 02.jpg";
import carosel3 from "../Images/Carousel 03.jpg";
import carosel4 from "../Images/Carousel 04.jpg";

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
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % 4);
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
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % 4);
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + 4) % 4);
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
      name: "Commercial Complex",
      type: "MEP Design & Installation",
      image: "🏢",
    },
    {
      name: "Residential Tower",
      type: "Energy Efficiency Upgrade",
      image: "🏘️",
    },
    { name: "Corporate Office", type: "Smart Automation System", image: "🏛️" },
    { name: "Industrial Facility", type: "HVAC Optimization", image: "🏭" },
  ];

  // Carousel images array
  const carouselImages = [
    {
      src: carosel1,
      alt: "MEP Engineering Design Project",
      title: "Commercial MEP Design",
      description: "State-of-the-art mechanical systems for modern buildings",
    },
    {
      src: carosel2,
      alt: "Industrial MEP Installation Project",
      title: "Industrial MEP Systems Engineering",
      description:
        "Integrated mechanical, electrical, and plumbing design for high-performance commercial and industrial infrastructure",
    },
    {
      src: carosel3,
      alt: "Smart Home Automation",
      title: "Intelligent Automation",
      description: "Smart home and office automation systems",
    },
    {
      src: carosel4,
      alt: "Construction Project",
      title: "MEP Construction",
      description: "Professional installation and implementation services",
    },
  ];

  return (
    <div className="App">
      {/* Navigation */}
      {/* <nav className={`navbar ${isScrolled ? "scrolled" : ""}`}>
        <div className="nav-container">
          <div className="nav-logo">
            <h2>BERESHIT GLOBAL</h2>
          </div>
          <div className={`nav-menu ${isMenuOpen ? "active" : ""}`}>
            <div className="nav-item">Home</div>
            <div className="nav-item">Services</div>
            <div className="nav-item">About</div>
            <div className="nav-item">Projects</div>
            <div className="nav-item">Contact</div>
          </div>
          <div
            className="nav-toggle"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
        </div>
      </nav> */}

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

      {/* Image Carousel Section */}
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
              <h3>250+</h3>
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
              <p>Expert Engineers</p>
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
            <div className="about-image slide-in-right">
              <div className="floating-elements">
                <div className="floating-element element-1">⚡</div>
                <div className="floating-element element-2">🔧</div>
                <div className="floating-element element-3">🌞</div>
                <div className="floating-element element-4">🏢</div>
              </div>
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

      {/* Projects Section */}
      <section className="projects">
        <div className="container">
          <div className="section-header">
            <h2>Our Projects</h2>
            <p>Showcasing our expertise in MEP engineering solutions</p>
          </div>
          <div className="projects-grid">
            {projects.map((project, index) => (
              <div key={index} className="project-card zoom-in">
                <div className="project-image">{project.image}</div>
                <div className="project-content">
                  <h3>{project.name}</h3>
                  <p>{project.type}</p>
                  <button className="project-btn">View Details</button>
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
            {/* <button className="btn-secondary">Get a Quote</button> */}
            <Link to="/contact" className="btn-secondary">
              Get a Quote
            </Link>
            <Link to="/contact" className="nav-item">
              Schedule Consultation
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
    </div>
  );
};

export default Home;
