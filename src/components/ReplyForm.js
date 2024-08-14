import React, { useState } from 'react';

function ReplyForm({ onSubmit }) {
  const [name, setName] = useState('');
  const [reply, setReply] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim() && reply.trim()) {
      onSubmit(name, reply);
      setName('');
      setReply('');
    } else {
      alert('Please enter both name and reply');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="reply-form">
      <input
        type="text"
        placeholder="Your Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <textarea
        placeholder="Write a reply..."
        value={reply}
        onChange={(e) => setReply(e.target.value)}
      />
      <button type="submit">POST</button>
    </form>
  );
}

export default ReplyForm;