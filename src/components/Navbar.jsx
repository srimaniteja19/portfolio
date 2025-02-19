import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import ThemeToggle from "./ThemeToggle";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <NavLink to="/" className="logo">
          <span className="logo-text">Sri Maniteja</span>
        </NavLink>
      </div>

      <div className="navbar-center">
        <NavLink to="/" className="nav-link">
          Home
        </NavLink>
        <NavLink to="/about" className="nav-link">
          About
        </NavLink>
        <NavLink to="/projects" className="nav-link">
          Projects
        </NavLink>
        <NavLink to="/experience" className="nav-link">
          Experience
        </NavLink>
        <ThemeToggle />
      </div>

      <button className="hamburger" onClick={toggleMenu}>
        <i className={`fas fa-${isOpen ? "times" : "bars"}`}></i>
      </button>

      <div className={`mobile-nav ${isOpen ? "open" : ""}`}>
        <NavLink to="/" className="nav-link" onClick={toggleMenu}>
          Home
        </NavLink>
        <NavLink to="/about" className="nav-link" onClick={toggleMenu}>
          About
        </NavLink>
        <NavLink to="/projects" className="nav-link" onClick={toggleMenu}>
          Projects
        </NavLink>
        <NavLink to="/experience" className="nav-link" onClick={toggleMenu}>
          Experience
        </NavLink>
        <button className="close-button" onClick={toggleMenu}>
          <i className="fas fa-times"></i>
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
