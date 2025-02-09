import React, { useState, useEffect } from 'react';
import { ChevronDown, Check } from 'lucide-react';

// Add click outside handler hook
const useClickOutside = (ref, handler) => {
  useEffect(() => {
    const listener = (event) => {
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }
      handler(event);
    };
    
    document.addEventListener('mousedown', listener);
    document.addEventListener('touchstart', listener);
    
    return () => {
      document.removeEventListener('mousedown', listener);
      document.removeEventListener('touchstart', listener);
    };
  }, [ref, handler]);
};

const ColorPicker = ({ color, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [recentColors, setRecentColors] = useState([]);
  
  const presetColors = [
    // Reds
    '#FF0000', '#FF4D4D', '#FF9999',
    // Blues
    '#0000FF', '#4D4DFF', '#9999FF',
    // Greens
    '#00FF00', '#4DFF4D', '#99FF99',
    // Yellows
    '#FFD700', '#FFE44D', '#FFEF99',
    // Purples
    '#800080', '#994D99', '#B299B2',
    // Browns
    '#8B4513', '#A0522D', '#B8860B',
    // Grays
    '#000000', '#808080', '#FFFFFF'
  ];

  useEffect(() => {
    const storedColors = localStorage.getItem('recentColors');
    if (storedColors) {
      setRecentColors(JSON.parse(storedColors));
    }
  }, []);

  const addToRecentColors = (newColor) => {
    const updatedColors = [
      newColor,
      ...recentColors.filter(c => c !== newColor).slice(0, 5)
    ];
    setRecentColors(updatedColors);
    localStorage.setItem('recentColors', JSON.stringify(updatedColors));
  };

  const handleColorChange = (newColor) => {
    onChange(newColor);
    addToRecentColors(newColor);
    setIsOpen(false);
  };

  const ColorButton = ({ colorValue, selected }) => (
    <button
      className={`w-8 h-8 rounded-lg border-2 transition-transform hover:scale-110 ${
        selected ? 'border-blue-500 shadow-lg' : 'border-gray-200'
      }`}
      style={{ backgroundColor: colorValue }}
      onClick={() => handleColorChange(colorValue)}
    >
      {selected && (
        <div className="flex items-center justify-center h-full">
          <Check 
            size={16} 
            className={`${
              isLightColor(colorValue) ? 'text-gray-800' : 'text-white'
            }`}
          />
        </div>
      )}
    </button>
  );

  const isLightColor = (hex) => {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return (r * 0.299 + g * 0.587 + b * 0.114) > 186;
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 px-3 py-2 rounded-lg border border-gray-200 hover:border-gray-300 bg-white shadow-sm"
      >
        <div
          className="w-6 h-6 rounded-md border border-gray-200"
          style={{ backgroundColor: color }}
        />
        <span className="text-sm text-gray-600">{color.toUpperCase()}</span>
        <ChevronDown size={16} className="text-gray-400" />
      </button>

      {isOpen && (
        <div className="absolute z-10 mt-2 p-4 bg-white rounded-lg shadow-xl border border-gray-200 w-72">
          <div className="space-y-4">
            {/* Custom color input */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                Custom Color
              </label>
              <input
                type="color"
                value={color}
                onChange={(e) => handleColorChange(e.target.value)}
                className="w-full h-10 rounded cursor-pointer"
              />
            </div>

            {/* Recent colors */}
            {recentColors.length > 0 && (
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  Recent Colors
                </label>
                <div className="grid grid-cols-6 gap-2">
                  {recentColors.map((recentColor) => (
                    <ColorButton
                      key={recentColor}
                      colorValue={recentColor}
                      selected={color === recentColor}
                    />
                  ))}
                </div>
              </div>
            )}

            {/* Preset colors */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                Preset Colors
              </label>
              <div className="grid grid-cols-6 gap-2">
                {presetColors.map((presetColor) => (
                  <ColorButton
                    key={presetColor}
                    colorValue={presetColor}
                    selected={color === presetColor}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ColorPicker;