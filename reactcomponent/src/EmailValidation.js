import React, { useState } from 'react';

const EmailValidation = () => {
  const [email, setEmail] = useState('');
  const [isValid, setIsValid] = useState(true);

  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    // Validate the email using a regular expression
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setIsValid(emailRegex.test(inputValue));
    setEmail(inputValue);
  };

  return (
    <div>
      <label>
        Email:
        <input
          type="text"
          value={email}
          onChange={handleInputChange}
          style={{ borderColor: isValid ? 'black' : 'red' }}
        />
      </label>
      {!isValid && <p style={{ color: 'red' }}>Please enter a valid email address.</p>}
    </div>
  );
};

export default EmailValidation;
