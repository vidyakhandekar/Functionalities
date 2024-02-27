import React, { useState } from 'react';

const FontSizeControl = () => {
  const [fontSize, setFontSize] = useState(24);

  const increaseFontSize = () => {
    setFontSize((prevSize) => prevSize + 4);
  };

  const decreaseFontSize = () => {
    setFontSize((prevSize) => (prevSize > 4 ? prevSize - 4 : prevSize));
  };

  return (
    <div>
      <h1 style={{ fontSize: `${fontSize}px` }}>Dynamic Font Size</h1>
      <button onClick={increaseFontSize}>Increase Font Size</button>
      <button onClick={decreaseFontSize}>Decrease Font Size</button>
    </div>
  );
};

export default FontSizeControl;
