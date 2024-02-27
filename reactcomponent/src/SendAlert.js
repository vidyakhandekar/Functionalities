import React from 'react';

const SendAlert = () => {
  const showAlert = () => {
    window.alert('This is a simple alert!');
  };

  return (
    <div>
      <h2>Alert Example</h2>
      <button onClick={showAlert}>Show Alert</button>
    </div>
  );
};

export default SendAlert;
