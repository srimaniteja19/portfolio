import { useState, useEffect } from "react";
import "./Home.css";
import TypeWriter from "../components/TypeWriter";
import profileImage from "../assets/profile.jpg";
import backend from "../assets/backend.png";
import frontend from "../assets/frontend.png";
import database from "../assets/database.png";
import ecom from "../assets/ecommerce.png";
import task from "../assets/tasks.png";

function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Initialize intersection observer for reveal animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("reveal-visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    // Observe all sections with reveal animation
    document.querySelectorAll(".reveal-on-scroll").forEach((section) => {
      observer.observe(section);
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  const handleMouseMove = (e) => {
    if (!isHovered) return;

    const { left, top, width, height } =
      e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - left) / width - 0.5;
    const y = (e.clientY - top) / height - 0.5;

    setMousePosition({ x, y });
  };

  return (
    <div className="home-container">
      <div
        className="parallax-background"
        style={{
          transform: `translateY(${scrollY * 0.5}px)`,
        }}
      />

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="name-reveal">
              <span>S</span>
              <span>r</span>
              <span>i</span>
              <span>&nbsp;</span>
              <span>M</span>
              <span>a</span>
              <span>n</span>
              <span>i</span>
              <span>t</span>
              <span>e</span>
              <span>j</span>
              <span>a</span>
            </h1>
            <h2>
              <TypeWriter text="Software Engineer" delay={100} />
            </h2>
            <p className="hero-description fade-in-animation">
              Passionate about building scalable web applications and solving
              complex problems through innovative solutions.
            </p>
            <div className="hero-cta">
              <a href="/projects" className="primary-button">
                View Projects
              </a>
              <a href="/about" className="secondary-button">
                Learn More
              </a>
            </div>
          </div>
          <div
            className="hero-image"
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => {
              setIsHovered(false);
              setMousePosition({ x: 0, y: 0 });
            }}
            style={{
              "--mouse-x": mousePosition.x,
              "--mouse-y": mousePosition.y,
              "--shadow-opacity": isHovered ? "1" : "0",
            }}
          >
            <img src={profileImage} alt="Profile" className="profile-image" />
          </div>
        </div>
      </section>

      {/* Featured Skills Section */}
      <section className="skills-section reveal-on-scroll">
        <h2>Core Technologies</h2>
        <div className="skills-grid">
          <div className="skill-card">
            <div className="skill-icon">
              <img src={frontend} alt="Frontend" />
            </div>
            <h3>Frontend Development</h3>
            <p>React, Next.js, JavaScript, TypeScript</p>
          </div>
          <div className="skill-card">
            <div className="skill-icon">
              <img src={backend} alt="Backend" />
            </div>
            <h3>Backend Development</h3>
            <p>Java, Spring Boot, Python, Node.js</p>
          </div>
          <div className="skill-card">
            <div className="skill-icon">
              <img src={database} alt="Database" />
            </div>
            <h3>Database & Cloud</h3>
            <p>MySQL, MongoDB, AWS, Azure</p>
          </div>
        </div>
      </section>

      {/* Featured Projects Preview */}
      <section className="projects-preview reveal-on-scroll">
        <h2>Featured Projects</h2>
        <div className="projects-grid">
          <div className="project-card">
            <img src={ecom} alt="Project 1" className="project-image" />
            <div className="project-content">
              <h3>E-Commerce Platform</h3>
              <p>
                A full-stack e-commerce solution with modern payment integration
              </p>
              <div className="project-tech">
                <span>React</span>
                <span>Node.js</span>
                <span>MongoDB</span>
              </div>
            </div>
          </div>
          <div className="project-card">
            <img src={task} alt="Project 2" className="project-image" />
            <div className="project-content">
              <h3>Task Management System</h3>
              <p>Efficient task tracking and team collaboration platform</p>
              <div className="project-tech">
                <span>Spring Boot</span>
                <span>React</span>
                <span>PostgreSQL</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Contact Section */}
      <section className="quick-contact reveal-on-scroll">
        <h2>Let's Connect</h2>
        <p>
          Interested in collaboration? Let's build something amazing together.
        </p>
        <div className="contact-options">
          <a href="mailto:srimaniteja.ch@gmail.com" className="contact-button">
            Send Email
          </a>
          <a
            href="https://www.linkedin.com/in/sri-maniteja-chinnam/"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-button"
          >
            LinkedIn Profile
          </a>
        </div>
      </section>
    </div>
  );
}

export default Home;
