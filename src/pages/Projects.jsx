import React from 'react';
import './Projects.css';

function Projects() {
  const projects = [
    {
      title: "E-Commerce Marketplace",
      metrics: [
        { label: "Transaction Speed Improvement", value: "-2s" },
        { label: "Loading Time Reduction", value: "-200ms" }
      ],
      description: "Integrated both traditional and cryptocurrency payment systems, facilitating seamless global transactions by increasing transaction speed by 2 seconds. Accelerated initiative to improve user experience, achieving a 200 ms speed increase in loading times through a streamlined checkout process and expanded payment options.",
      technologies: ["React", "Node.js", "PostgreSQL", "AWS"]
    },
    {
      title: "AI-Powered Analytics Dashboard",
      metrics: [
        { label: "Data Processing Speed", value: "+40%" },
        { label: "User Engagement", value: "+25%" }
      ],
      description: "Developed a real-time analytics dashboard using machine learning algorithms to process and visualize complex data sets. Implemented predictive analytics features resulting in improved decision-making capabilities and increased user engagement across the platform.",
      technologies: ["Python", "TensorFlow", "React", "MongoDB", "Docker"]
    },
    {
      title: "Cloud-Based Task Management System",
      metrics: [
        { label: "Team Productivity", value: "+30%" },
        { label: "Resource Utilization", value: "+45%" }
      ],
      description: "Architected and implemented a scalable task management system using microservices architecture. Integrated real-time collaboration features and automated workflow processes, resulting in significant improvements in team productivity and resource utilization.",
      technologies: ["Spring Boot", "React", "AWS", "Kubernetes", "Redis"]
    }
  ];

  return (
    <div className="projects-container">
      <div className="card card--purple">
        <div className="card__header">
          <h2>Featured Projects</h2>
          <p className="header-description">
            A showcase of my recent work and technical achievements
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-item">
              <div className="project-header">
                <h3>{project.title}</h3>
              </div>

              <div className="project-metrics">
                {project.metrics.map((metric, idx) => (
                  <div key={idx} className="metric-card">
                    <span className="metric-label">{metric.label}</span>
                    <span className="metric-value">{metric.value}</span>
                  </div>
                ))}
              </div>

              <p className="project-description">{project.description}</p>

              <div className="project-tech">
                {project.technologies.map((tech, idx) => (
                  <span key={idx} className="tech-tag">{tech}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;