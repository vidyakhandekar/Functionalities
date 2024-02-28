import React, { useState } from 'react';

const Addcomment = () => {
 
  const [comments, setComments] = useState([]);
  
 
  const [newComment, setNewComment] = useState('');

  
  const handleAddComment = () => {
    if (newComment.trim() !== '') {
      setComments([...comments, newComment]);
      setNewComment(''); 
    }
  };

  return (
    <div>
      <h2>Comments</h2>
      
      
      <ul>
        {comments.map((comment, index) => (
          <li key={index}>{comment}</li>
        ))}
      </ul>
      
      <div>
        <textarea
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Add a comment..."
        />
        <br />
        <button onClick={handleAddComment}>Add Comment</button>
      </div>
    </div>
  );
};

export default Addcomment;
