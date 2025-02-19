import { useEffect, useState } from "react";
import "./ThemeToggle.css";

function ThemeToggle() {
  const [isDark, setIsDark] = useState(() => {
    // Check if theme is saved in localStorage
    const savedTheme = localStorage.getItem("theme");
    // Check system preference if no saved theme
    if (!savedTheme) {
      return window.matchMedia("(prefers-color-scheme: dark)").matches;
    }
    return savedTheme === "dark";
  });

  useEffect(() => {
    // Apply theme on mount and when it changes
    document.documentElement.setAttribute(
      "data-theme",
      isDark ? "dark" : "light"
    );
    localStorage.setItem("theme", isDark ? "dark" : "light");
  }, [isDark]);

  // Initialize theme on mount
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = (e) => {
      if (!localStorage.getItem("theme")) {
        setIsDark(e.matches);
      }
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  const toggleTheme = () => {
    setIsDark((prev) => !prev);
  };

  return (
    <button
      className="theme-toggle"
      onClick={toggleTheme}
      aria-label={`Switch to ${isDark ? "light" : "dark"} theme`}
    >
      {isDark ? <i className="fas fa-sun" /> : <i className="fas fa-moon" />}
    </button>
  );
}

export default ThemeToggle;
