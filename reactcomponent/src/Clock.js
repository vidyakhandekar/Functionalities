import React, { useState, useEffect } from 'react';

function Clock() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);
  return (
    <div>
       <div>
      <h2>Real-time Clock</h2>
      <p>{currentTime.toLocaleTimeString()}</p>
    </div>
    </div>
  )
}

export default Clock
