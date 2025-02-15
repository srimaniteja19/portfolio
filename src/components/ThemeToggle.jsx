import React from "react";
import { Sun, Moon } from "lucide-react";
import "./ThemeToggle.css";

const ThemeToggle = ({ isDark, onToggle }) => {
  return (
    <button
      className={`theme-toggle ${isDark ? "dark" : "light"}`}
      onClick={onToggle}
      aria-label="Toggle theme"
    >
      <div className="toggle-wrapper">
        <Sun className="sun" size={16} />
        <Moon className="moon" size={16} />
      </div>
      <div className="toggle-background" />
    </button>
  );
};

export default ThemeToggle;
