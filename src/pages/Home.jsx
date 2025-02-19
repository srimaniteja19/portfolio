import { useState, useEffect } from "react";
import "./Home.css";
import profileImage from "../assets/profile.jpg";
import backend from "../assets/backend.png";
import frontend from "../assets/frontend.png";
import database from "../assets/database.png";
import ecom from "../assets/ecommerce.png";
import task from "../assets/tasks.png";
import SplitText from "../components/SplitText";
import BlurText from "../components/BlurText";
import TrueFocus from "../components/TrueFocus";
import FallingText from "../components/FallingText";
import TiltedCard from "../components/TiltedCard";

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

  const handleAnimationComplete = () => {
    console.log("Name animation completed!");
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
            <h1>
              <TrueFocus
                sentence="Sri Maniteja"
                manualMode={false}
                blurAmount={5}
                borderColor="hotpink"
                animationDuration={1}
                pauseBetweenAnimations={1}
              />
            </h1>
            <h2>
              <BlurText
                text="Software Engineer!"
                delay={150}
                animateBy="words"
                direction="top"
                onAnimationComplete={handleAnimationComplete}
                className="text-2xl mb-8"
              />{" "}
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
          <div className="hero-image">
            <TiltedCard
              imageSrc={profileImage}
              altText="Sri Maniteja"
              captionText="Sri Maniteja"
              containerHeight="300px"
              containerWidth="300px"
              imageHeight="300px"
              imageWidth="300px"
              rotateAmplitude={12}
              scaleOnHover={1.2}
              showMobileWarning={false}
              showTooltip={true}
              displayOverlayContent={true}
              // overlayContent={
              //   <p className="tilted-card-demo-text">Sri Maniteja</p>
              // }
            />
          </div>
        </div>
      </section>

      {/* Featured Skills Section */}
      <section className="skills-section reveal-on-scroll">
        <h2>Skills</h2>
        <div className="skills-grid">
          <div className="skill-card">
            <img
              src={frontend}
              alt="Frontend Development"
              className="skill-icon"
            />
            <h3>Frontend Development</h3>
            <p>React, Next.js, JavaScript, TypeScript</p>
          </div>
          <div className="skill-card">
            <img
              src={backend}
              alt="Backend Development"
              className="skill-icon"
            />
            <h3>Backend Development</h3>
            <p>Java, Spring Boot, Python, Node.js</p>
          </div>
          <div className="skill-card">
            <img src={database} alt="Database & Cloud" className="skill-icon" />
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
            <img
              src={ecom}
              alt="E-Commerce Platform"
              className="project-image"
            />
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
            <img
              src={task}
              alt="Task Management System"
              className="project-image"
            />
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
