import React, { useState, useEffect } from 'react';

const DelayedMessageDisplay = () => {
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowMessage(true);
    }, 10000);

    return () => clearTimeout(timeout);
  }, []);

  return <p>{showMessage ? 'Delayed Message Displayed!' : 'Waiting...'}</p>;
};

export default DelayedMessageDisplay;
