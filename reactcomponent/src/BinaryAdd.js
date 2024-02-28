import React, { useState } from 'react';

const BinaryAdd = () => {
  const [binaryInput1, setBinaryInput1] = useState('');
  const [binaryInput2, setBinaryInput2] = useState('');
  const [result, setResult] = useState('');

  const handleAddition = () => {
    
    const regex = /^[01]+$/;
    if (regex.test(binaryInput1) && regex.test(binaryInput2)) {
      const decimalResult = parseInt(binaryInput1, 2) + parseInt(binaryInput2, 2);
      setResult(decimalResult.toString(2));
    } else {
      setResult('Invalid binary input');
    }
  };

  return (
    <div>
      <h2>Binary Addition</h2>
      
      <label>Binary Input 1: 
        <input 
          type="text" 
          value={binaryInput1} 
          onChange={(e) => setBinaryInput1(e.target.value)}
        />
      </label>

      <br />

      <label>Binary Input 2: 
        <input 
          type="text" 
          value={binaryInput2} 
          onChange={(e) => setBinaryInput2(e.target.value)}
        />
      </label>

      <br />

      <button onClick={handleAddition}>Add</button>

      <br />

      <p>Result: {result}</p>
    </div>
  );
};

export default BinaryAdd;
