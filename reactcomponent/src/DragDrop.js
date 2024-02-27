import React, { useState } from 'react';

function DragDrop() {
    const [dragging, setDragging] = useState(false);

    const handleDragStart = () => {
      setDragging(true);
     };

  const handleDragEnd = () => {
    setDragging(false);
  };
  return (
    <div
      draggable
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
      style={{ border: `2px solid ${dragging ? 'red' : 'black'}` }}
    >
      {dragging ? 'Dragging in progress' : 'Drag me!'}
    </div>
  )
}

export default DragDrop
