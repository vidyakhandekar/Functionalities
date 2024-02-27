import React, { useState } from 'react';

const ColorPicker = () => {
  const [color, setColor] = useState('#000000');

  const handleColorChange = (e) => {
    setColor(e.target.value);
  };

  return (
    <div>
      <h1 style={{ color }}>Pick Color</h1>
      <input type="color" value={color} onChange={handleColorChange} />
    </div>
  );
};

export default ColorPicker;
