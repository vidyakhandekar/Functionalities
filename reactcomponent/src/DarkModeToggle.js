import React, { useState } from 'react';

const DarkModeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <div style={{ backgroundColor: isDarkMode ? '#333' : '#fff', color: isDarkMode ? '#fff' : '#333' }}>
      <p>Toggle Dark Mode</p>
      <button onClick={() => setIsDarkMode(!isDarkMode)}>Toggle</button>
    </div>
  );
};

export default DarkModeToggle;
