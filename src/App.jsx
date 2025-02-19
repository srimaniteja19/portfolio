import { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Experience from "./pages/Experience";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Footer from "./components/Footer";
import Canvas from "./pages/Canvas";
import ThemeToggle from "./components/ThemeToggle";
import ParticleBackground from "./components/ParticleBackground";

// Wrap routes with transition
function AnimatedRoutes() {
  const location = useLocation();

  return (
    <>
      <Routes location={location}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/canvas" element={<Canvas />} />
      </Routes>
    </>
  );
}

function App() {
  const [isDark, setIsDark] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme === "dark";
  });

  useEffect(() => {
    document.documentElement.classList.toggle("dark-mode", isDark);
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark((prev) => {
      const newTheme = !prev;
      localStorage.setItem("theme", newTheme ? "dark" : "light");
      return newTheme;
    });
  };

  return (
    <Router>
      <div className={`app ${isDark ? "dark" : ""}`}>
        <ParticleBackground isDark={isDark} />
        <Navbar>
          <ThemeToggle isDark={isDark} onToggle={toggleTheme} />
        </Navbar>
        <AnimatedRoutes />
        <Footer isDark={isDark} />
      </div>
    </Router>
  );
}

export default App;
