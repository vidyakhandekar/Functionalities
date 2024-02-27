import React, { useState } from 'react';


const HandleFontChange = () => {
  const [selectedFont, setSelectedFont] = useState('Arial');

  const handleFontChange = (event) => {
    setSelectedFont(event.target.value);
  };

  return (
    <div className="app" style={{ fontFamily: selectedFont }}>
      <h1>Your App</h1>
      <div className="font-selector">
        <label>
          Select Font:
          <select value={selectedFont} onChange={handleFontChange}>
            <option value="Arial">Arial</option>
            <option value="Verdana">Verdana</option>
            <option value="Courier New">Courier New</option>
            
          </select>
        </label>
      </div>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed turpis at arcu maximus vestibulum eu ut odio.
      </p>
    </div>
  );
};

export default HandleFontChange;
