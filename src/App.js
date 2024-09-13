// App.js
import React from 'react';
import './App.css';
import ThemeToggleButton from './Component/ThemeToggleButton'; // Import the button component

const App = () => {
  return (
    <div className="App">
      <h1>Welcome to the Theme Toggle App</h1>
      {/* Use the theme toggle button */}
      <ThemeToggleButton />
    </div>
  );
};

export default App;
