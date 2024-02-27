import React, { useState } from 'react';

function ToggleVisibility() {
    const [isVisible, setIsVisible] = useState(true);
  return (
    <div>
      {isVisible && <p>This is visible</p>}
      <button onClick={() => setIsVisible(!isVisible)}>Toggle Visibility</button>
    </div>
  )
}

export default ToggleVisibility
