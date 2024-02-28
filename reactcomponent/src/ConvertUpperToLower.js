import React, { useState } from 'react';

const ConvertUpperToLower = () => {
  const [inputText, setInputText] = useState('');
  const [convertedText, setConvertedText] = useState('');

  const handleConvert = () => {
    const lowercaseText = inputText.toLowerCase();
    setConvertedText(lowercaseText);
  };

  return (
    <div>
      <h2>Uppercase to Lowercase Converter</h2>
      
      <label>Uppercase Input: 
        <input 
          type="text" 
          value={inputText} 
          onChange={(e) => setInputText(e.target.value)}
        />
      </label>

      <br />

      <button onClick={handleConvert}>Convert</button>

      <br />

      {convertedText && (
        <p>Lowercase Result: {convertedText}</p>
      )}
    </div>
  );
};

export default ConvertUpperToLower;
