import React, { useState } from 'react';
import './changestyle.css';


const ChangeStyle = () => {
  const [text, setText] = useState('');
  const [bold, setBold] = useState(false);
  const [italic, setItalic] = useState(false);
  const [underlined, setUnderlined] = useState(false);

  const handleBoldToggle = () => {
    setBold(!bold);
  };

  const handleItalicToggle = () => {
    setItalic(!italic);
  };

  const handleUnderlineToggle = () => {
    setUnderlined(!underlined);
  };

  const textStyle = {
    fontWeight: bold ? 'bold' : 'normal',
    fontStyle: italic ? 'italic' : 'normal',
    textDecoration: underlined ? 'underline' : 'none',
  };

  return (
    <div className="app">
      <h1>Your App</h1>
      <div className="text-controls">
        <button onClick={handleBoldToggle}>Bold</button>
        <button onClick={handleItalicToggle}>Italic</button>
        <button onClick={handleUnderlineToggle}>Underline</button>
      </div>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        style={textStyle}
        placeholder="Type your text here..."
      />
    </div>
  );
};

export default ChangeStyle;
