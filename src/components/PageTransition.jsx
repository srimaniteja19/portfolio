import React from "react";
import "./PageTransition.css";

const PageTransition = ({ isLoading }) => {
  return (
    <div className={`page-transition ${isLoading ? "loading" : ""}`}>
      <div className="loader">
        <svg viewBox="0 0 50 50">
          <circle
            cx="25"
            cy="25"
            r="20"
            fill="none"
            stroke="currentColor"
            strokeWidth="4"
          />
        </svg>
      </div>
    </div>
  );
};

export default PageTransition;
