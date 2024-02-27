import React, { useState } from 'react';


function DynamicStyle() {

    const [isImportant, setIsImportant] = useState(false);
  return (
    <div style={{ fontSize: isImportant ? '24px' : '16px' }}>
      <p>This text is {isImportant ? 'important' : 'normal'}!</p>
      <button onClick={() => setIsImportant(!isImportant)}>Toggle Importance</button>
    </div>
  )
}

export default DynamicStyle
