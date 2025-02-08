import React from 'react';
import './Experience.css';

function Experience() {
  return (
    <div className="experience-container">
      <div className="card">
        <div className="card__header">
          <h2>Professional Experience</h2>
        </div>
        
        <div className="experience-item">
          <h3>The Goodyear Tire & Rubber Company - Software Engineer</h3>
          <p className="experience-period">May 2024 - Present</p>
          <ul className="experience-list">
            <li>Developed RESTful APIs using Java and Spring Boot, improving data exchange efficiency by 15%.</li>
            <li>Integrated frontend interfaces using React and Next.js, improving user engagement metrics by 20%.</li>
            <li>Collaborated with a cross-functional team to gather and finalize requirement specifications for two major projects.</li>
            <li>Implemented backend services and business logic using Java, ensuring scalability and performance optimization.</li>
            <li>Led the migration of legacy backend services to a microservices architecture using Spring Boot.</li>
          </ul>
        </div>

        <div className="experience-item">
          <h3>Aircom Solutions PVT LTD - Software Engineer</h3>
          <p className="experience-period">August 2020 - July 2022</p>
          <ul className="experience-list">
            <li>Developed and maintained web applications using Java, Spring Boot, and Hibernate.</li>
            <li>Implemented RESTful APIs using Spring MVC, facilitating seamless integration with front-end applications.</li>
            <li>Utilized React/Next.js for front-end development, creating dynamic and responsive user interfaces.</li>
            <li>Optimized SQL queries and database interactions to improve application speed and efficiency.</li>
            <li>Conducted unit and integration testing using JUnit and Mockito.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Experience;