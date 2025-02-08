import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <Link to="/" className="logo">
          <span className="logo-text">Sri Maniteja</span>
        </Link>
      </div>

      <div className="navbar-center">
        <div className="nav-item">
          <Link to="/" className="nav-link">Home</Link>
        </div>
        <div className="nav-item">
          <Link to="/about" className="nav-link">About</Link>
        </div>
        <div className="nav-item">
          <Link to="/projects" className="nav-link">Projects</Link>
        </div>
        <div className="nav-item">
          <Link to="/experience" className="nav-link">Experience</Link>
        </div>
      </div>

    </nav>
  );
}

export default Navbar;