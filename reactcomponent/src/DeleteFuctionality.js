import React, { useState } from 'react';

function DeleteFuctionality() {
    const [items, setItems] = useState(['Task 1', 'Task 2', 'Task 3']);
    const handleDelete = (index) => {
        const updatedItems = [...items];
        updatedItems.splice(index, 1);
        setItems(updatedItems);
      };
  return (
    <div>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item}
            <button onClick={() => handleDelete(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default DeleteFuctionality
