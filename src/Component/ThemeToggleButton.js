// ThemeToggleButton.jsx
import React, { useState, useEffect } from 'react';

const ThemeToggleButton = () => {
  // State to track the current theme (light by default)
  const [theme, setTheme] = useState('light');

  // Function to toggle the theme
  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);

    // Apply the theme to the body class
    document.body.className = newTheme;
  };

  // Apply the theme when the component mounts
  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <button onClick={toggleTheme} className="theme-toggle-button">
      Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
    </button>
  );
};

export default ThemeToggleButton;