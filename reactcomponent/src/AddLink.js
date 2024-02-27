import React, { useState } from 'react';
import './AddLink.css';

const AddLink = () => {
  const [linkUrl, setLinkUrl] = useState('');
  const [linkText, setLinkText] = useState('');

  const handleLinkSubmit = (e) => {
    e.preventDefault();
    setLinkUrl(linkUrl);
    setLinkText(linkText);
  };

  return (
    <div className="app">
      <h1>Your App</h1>
      <form onSubmit={handleLinkSubmit}>
        <label>
          Link URL:
          <input type="text" value={linkUrl} onChange={(e) => setLinkUrl(e.target.value)} />
        </label>
        <label>
          Link Text:
          <input type="text" value={linkText} onChange={(e) => setLinkText(e.target.value)} />
        </label>
        <button type="submit">Add Link</button>
      </form>
      {linkUrl && (
        <div className="link-container">
          <a href={linkUrl} target="_blank" rel="noopener noreferrer">
            {linkText || linkUrl}
          </a>
        </div>
      )}
    </div>
  );
};

export default AddLink;
