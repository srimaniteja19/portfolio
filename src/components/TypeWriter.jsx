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
      // Add a small delay before setting isComplete to true for smoother transition
      setTimeout(() => {
        setIsComplete(true);
      }, 500);
    }
  }, [currentIndex, delay, text]);

  return (
    <div className="inline-block">
      <span className={`${className} transition-all duration-200 ease-in-out`}>
        {currentText}
      </span>
      <span 
        className={`
          inline-block 
          w-0.5 
          h-8 
          ml-1 
          bg-blue-600 
          transition-opacity 
          duration-500 
          ease-in-out
          ${isComplete ? 'opacity-0' : 'animate-cursor'}
        `}
        style={{
          animation: !isComplete ? 'cursorBlink 1s step-end infinite' : 'none',
          verticalAlign: 'middle'
        }}
      >
      </span>
      <style jsx>{`
        @keyframes cursorBlink {
          from, to {
            opacity: 1;
          }
          50% {
            opacity: 0;
          }
        }

        .animate-cursor {
          animation: cursorBlink 1s step-end infinite;
        }
      `}</style>
    </div>
  );
};

export default TypeWriter;