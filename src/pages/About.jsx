import React from 'react';
import './About.css';

function About() {
    const skillCategories = [
      {
        title: "Languages / Frameworks",
        skills: [
          { name: "Java (Spring Boot)", level: 90 },
          { name: "Python", level: 85 },
          { name: "JavaScript/TypeScript", level: 88 },
          { name: "React/Next.js", level: 85 },
          { name: "Node.js", level: 80 }
        ]
      },
      {
        title: "Frontend Technologies",
        skills: [
          { name: "React", level: 90 },
          { name: "Next.js", level: 85 },
          { name: "HTML5/CSS3", level: 88 },
          { name: "Angular", level: 75 },
          { name: ".NET", level: 70 }
        ]
      },
      {
        title: "Databases & Cloud",
        skills: [
          { name: "MySQL", level: 85 },
          { name: "MongoDB", level: 80 },
          { name: "AWS", level: 85 },
          { name: "Azure", level: 75 },
          { name: "Redis", level: 70 }
        ]
      },
      {
        title: "DevOps & Tools",
        skills: [
          { name: "Docker", level: 85 },
          { name: "Kubernetes", level: 80 },
          { name: "Jenkins", level: 75 },
          { name: "Git", level: 90 },
          { name: "Terraform", level: 70 }
        ]
      }
    ];
  
    return (
      <div className="about-container">
        <div className="card">
          <div className="card__header">
            <h2>About Me</h2>
            <p className="about-description">
              Software engineer with 3+ years of experience in building scalable, high-performance web applications. 
              Expertise in backend development with Java, Spring Boot, and Python coupled with frontend development using 
              React to create dynamic user experiences. Skilled in optimizing databases, designing robust RESTful APIs, 
              and deploying efficient cloud solutions on AWS.
            </p>
          </div>
  
          <div className="skills-section">
            <h3>Technical Expertise</h3>
            <div className="skills-container">
              {skillCategories.map((category, idx) => (
                <div key={idx} className="skill-category">
                  <h4>{category.title}</h4>
                  <div className="skills-list">
                    {category.skills.map((skill, skillIdx) => (
                      <div key={skillIdx} className="skill-item">
                        <div className="skill-info">
                          <span className="skill-name">{skill.name}</span>
                          <span className="skill-percentage">{skill.level}%</span>
                        </div>
                        <div className="skill-bar">
                          <div 
                            className="skill-progress" 
                            style={{ width: `${skill.level}%` }}
                          >
                            <div className="skill-progress-glow"></div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default About;