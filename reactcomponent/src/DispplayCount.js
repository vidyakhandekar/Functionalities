import React, { useState } from 'react';

function DispplayCount() {
    const [text, setText] = useState('');
  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <p>Character Count: {text.length}</p>
    </div>
  )
}

export default DispplayCount
