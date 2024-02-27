import React, { useState } from 'react';

const CopyText = () => {
  const [textToCopy, setTextToCopy] = useState('Text to be copied');

  const handleCopyText = () => {
    // Use the Clipboard API to copy text to the clipboard
    navigator.clipboard.writeText(textToCopy)
      .then(() => {
        console.log('Text successfully copied to clipboard:', textToCopy);
      })
      .catch((err) => {
        console.error('Unable to copy text to clipboard:', err);
      });
  };

  return (
    <div>
      <h2>Copy Text</h2>
      <div>
        <input
          type="text"
          
          onChange={(e) => setTextToCopy(e.target.value)}
          
        />
      </div>
      <div>
        <button onClick={handleCopyText}>Copy Text</button>
      </div>
    </div>
  );
};

export default CopyText;
