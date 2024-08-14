import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addComment } from '../store/commentsSlice';

function CommentForm() {
  const [name, setName] = useState('');
  const [comment, setComment] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim() && comment.trim()) {
      dispatch(addComment({ name, comment }));
      setName('');
      setComment('');
    } else {
      alert('Please enter both name and comment');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="comment-form">
      <input
        type="text"
        placeholder="Your Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <textarea
        placeholder="Write a comment..."
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      />
      <button type="submit">POST</button>
    </form>
  );
}

export default CommentForm;