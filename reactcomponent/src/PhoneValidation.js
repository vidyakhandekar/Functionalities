import React, { useState } from 'react';

function PhoneValidation () {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isValid, setIsValid] = useState(true);

  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    
    const phoneRegex = /^\d{10}$/; 
    setIsValid(phoneRegex.test(inputValue));
    setPhoneNumber(inputValue);
  };

  return (
    <div>
      <label>
        Phone Number:
        <input
          type="text"
          value={phoneNumber}
          onChange={handleInputChange}
          style={{ borderColor: isValid ? 'black' : 'red' }}
        />
      </label>
      {!isValid && <p style={{ color: 'red' }}>Please enter a valid 10-digit phone number.</p>}
    </div>
  );
};

export default PhoneValidation;
