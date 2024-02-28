import React, { useState } from 'react';

const ConvertDecimalToBinary = () => {
  const [decimalInput, setDecimalInput] = useState('');
  const [binaryResult, setBinaryResult] = useState(null);

  const handleConvert = () => {
   
    const decimalRegex = /^\d+$/;
    
    if (decimalRegex.test(decimalInput)) {
      const binaryResult = parseInt(decimalInput, 10).toString(2);
      setBinaryResult(binaryResult);
    } else {
      setBinaryResult(null); 
    }
  };

  return (
    <div>
      <h2>Decimal to Binary Converter</h2>
      
      <label>Decimal Input: 
        <input 
          type="text" 
          value={decimalInput} 
          onChange={(e) => setDecimalInput(e.target.value)}
        />
      </label>

      <br />

      <button onClick={handleConvert}>Convert</button>

      <br />

      {binaryResult !== null && (
        <p>Binary Result: {binaryResult}</p>
      )}
      {binaryResult === null && (
        <p>Invalid decimal input</p>
      )}
    </div>
  );
};

export default ConvertDecimalToBinary;
