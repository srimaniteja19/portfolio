import { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import PropTypes from "prop-types";

function Navbar({ children }) {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  // const handleConfetti = () => {
  //   const duration = 2 * 1000; // Duration of the confetti effect
  //   const end = Date.now() + duration;

  //   (function frame() {
  //     confetti({
  //       particleCount: 5,
  //       angle: 60,
  //       spread: 55,
  //       origin: { x: 0 },
  //     });
  //     confetti({
  //       particleCount: 5,
  //       angle: 120,
  //       spread: 55,
  //       origin: { x: 1 },
  //     });

  //     if (Date.now() < end) {
  //       requestAnimationFrame(frame);
  //     }
  //   })();
  // };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <Link to="/" className="logo">
          <span className="logo-text">Sri Maniteja</span>
        </Link>
      </div>
      <div className="navbar-center">
        <div className="nav-item">
          <Link to="/" className="nav-link">
            Home
          </Link>
        </div>
        <div className="nav-item">
          <Link to="/about" className="nav-link">
            About
          </Link>
        </div>
        <div className="nav-item">
          <Link to="/projects" className="nav-link">
            Projects
          </Link>
        </div>
        <div className="nav-item">
          <Link to="/experience" className="nav-link">
            Experience
          </Link>
        </div>
        <div className="nav-item">
          <Link to="/canvas" className="nav-link">
            Canvas
          </Link>
        </div>
      </div>
      <div className="theme-toggle-container">{children}</div>
      {/* Hamburger Menu */}
      <div className="hamburger" onClick={toggleMobileMenu}>
        <div></div>
        <div></div>
        <div></div>
      </div>
      {/* Mobile Navigation */}
      <div className={`mobile-nav ${isMobileMenuOpen ? "open" : ""}`}>
        <button className="close-button" onClick={toggleMobileMenu}>
          X
        </button>
        <div className="nav-item">
          <Link to="/" className="nav-link" onClick={toggleMobileMenu}>
            Home
          </Link>
        </div>
        <div className="nav-item">
          <Link to="/about" className="nav-link" onClick={toggleMobileMenu}>
            About
          </Link>
        </div>
        <div className="nav-item">
          <Link to="/projects" className="nav-link" onClick={toggleMobileMenu}>
            Projects
          </Link>
        </div>
        <div className="nav-item">
          <Link
            to="/experience"
            className="nav-link"
            onClick={toggleMobileMenu}
          >
            Experience
          </Link>
        </div>
        <div className="nav-item">
          <Link to="/canvas" className="nav-link" onClick={toggleMobileMenu}>
            Canvas
          </Link>
        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  children: PropTypes.node,
};

export default Navbar;
