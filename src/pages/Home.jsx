import React from 'react';
import './Home.css';
import TypeWriter from '../components/Typewriter';
import profileImage from '../assets/profile.jpg';
import backend from '../assets/backend.png';
import frontend from '../assets/frontend.png';
import database from '../assets/database.png';
import ecom from '../assets/ecommerce.png';
import task from '../assets/tasks.png';

function Home() {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <div className="hero-text">
            <h1>
              <TypeWriter 
                text="Sri Maniteja" 
                delay={150}
                className="gradient-text"
              />
            </h1>
            <h2>Software Engineer</h2>
            <p className="hero-description">
              Passionate about building scalable web applications and solving complex problems through innovative solutions.
            </p>
            <div className="hero-cta">
              <a href="/projects" className="primary-button">View Projects</a>
              <a href="/about" className="secondary-button">Learn More</a>
            </div>
          </div>
          <div className="hero-image">
            <img src={profileImage} alt="Profile" className="profile-image" />
          </div>
        </div>
      </section>

      {/* Featured Skills Section */}
      <section className="skills-section">
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
      <section className="projects-preview">
        <h2>Featured Projects</h2>
        <div className="projects-grid">
          <div className="project-card">
            <img src={ecom} alt="Project 1" className="project-image" />
            <div className="project-content">
              <h3>E-Commerce Platform</h3>
              <p>A full-stack e-commerce solution with modern payment integration</p>
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
      <section className="quick-contact">
        <h2>Let's Connect</h2>
        <p>Interested in collaboration? Let's build something amazing together.</p>
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