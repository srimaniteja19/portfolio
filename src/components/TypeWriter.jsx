import React, { useState, useEffect } from 'react';

const TypeWriter = ({ text, delay = 80, className = '' }) => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setCurrentText(prevText => prevText + text[currentIndex]);
        setCurrentIndex(prevIndex => prevIndex + 1);
      }, delay);

      return () => clearTimeout(timeout);
    } else {
      setTimeout(() => {
        setIsComplete(true);
      }, 500);
    }
  }, [currentIndex, delay, text]);

  const cursorStyle = {
    display: 'inline-block',
    width: '2px',
    height: '32px',
    marginLeft: '4px',
    backgroundColor: '#2563eb',
    transition: 'opacity 0.5s ease-in-out',
    opacity: isComplete ? 0 : 1,
    animation: !isComplete ? 'cursorBlink 1s step-end infinite' : 'none',
    verticalAlign: 'middle'
  };

  const containerStyle = {
    display: 'inline-block'
  };

  const textStyle = {
    transition: 'all 0.2s ease-in-out'
  };

  return (
    <div style={containerStyle}>
      <span style={{...textStyle}} className={className}>
        {currentText}
      </span>
      <span style={cursorStyle}></span>
      <style>
        {`
          @keyframes cursorBlink {
            from, to {
              opacity: 1;
            }
            50% {
              opacity: 0;
            }
          }
        `}
      </style>
    </div>
  );
};

export default TypeWriter;