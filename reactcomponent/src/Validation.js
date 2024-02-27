import React, { useState, useEffect } from 'react';

function Validation() {
    const [username, setUsername] = useState('');
    const [isValid, setIsValid] = useState(false);
    
    useEffect(() => {
    setIsValid(username.length > 3);
     }, [username]);
  return (
    <div>
        <label>
         Username:
         <input
         type="text"
         value={username}
         onChange={(e) => setUsername(e.target.value)}
        />
        </label>
        {isValid ? <p>Username is valid!</p> : <p>Username is too short!</p>}
   </div>
  )
}

export default Validation
