import React, { useState } from 'react';

const ConvertBinaryToDecimal = () => {
  const [binaryInput, setBinaryInput] = useState('');
  const [decimalResult, setDecimalResult] = useState(null);

  const handleConvert = () => {
   
    const binaryRegex = /^[01]+$/;
    
    if (binaryRegex.test(binaryInput)) {
      const decimalResult = parseInt(binaryInput, 2);
      setDecimalResult(decimalResult);
    } else {
      setDecimalResult(null); 
    }
  };

  return (
    <div>
      <h2>Binary to Decimal Converter</h2>
      
      <label>Binary Input: 
        <input 
          type="text" 
          value={binaryInput} 
          onChange={(e) => setBinaryInput(e.target.value)}
        />
      </label>

      <br />

      <button onClick={handleConvert}>Convert</button>

      <br />

      {decimalResult !== null && (
        <p>Decimal Result: {decimalResult}</p>
      )}
      {decimalResult === null && (
        <p>Invalid binary input</p>
      )}
    </div>
  );
};

export default ConvertBinaryToDecimal;
