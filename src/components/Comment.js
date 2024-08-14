import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { editComment, deleteComment, addReply } from '../store/commentsSlice';
import ReplyForm from './ReplyForm';

function Comment({ comment, isReply = false }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedComment, setEditedComment] = useState(comment.comment);
  const [showReplyForm, setShowReplyForm] = useState(false);
  const dispatch = useDispatch();

  const handleEdit = () => {
    if (editedComment.trim()) {
      dispatch(editComment({ id: comment.id, comment: editedComment }));
      setIsEditing(false);
    } else {
      alert('Please enter a comment');
    }
  };

  const handleDelete = () => {
    dispatch(deleteComment(comment.id));
  };

  const handleReply = (name, replyText) => {
    dispatch(addReply({ parentId: comment.id, name, comment: replyText }));
    setShowReplyForm(false);
  };

  const handleCancelEdit = () => {
    setEditedComment(comment.comment);
    setIsEditing(false);
  };

  return (
    <div className={`comment ${isReply ? 'reply' : ''}`}>
      <div className="comment-header">
        <span className="comment-author">{comment.name}</span>
        <span className="comment-date">{new Date(comment.date).toLocaleString()}</span>
      </div>
      {isEditing ? (
        <div>
          <textarea
            value={editedComment}
            onChange={(e) => setEditedComment(e.target.value)}
          />
          <div className="edit-actions">
            <button onClick={handleEdit}>Save</button>
            <button onClick={handleCancelEdit}>Cancel</button>
          </div>
        </div>
      ) : (
        <p className="comment-text">{comment.comment}</p>
      )}
      <div className="comment-actions">
        {!isReply && <button onClick={() => setShowReplyForm(!showReplyForm)}>Reply</button>}
        <button onClick={() => setIsEditing(!isEditing)}>Edit</button>
      </div>
      <button className="delete-button" onClick={handleDelete}>🗑️</button>
      {showReplyForm && <ReplyForm onSubmit={handleReply} />}
      {comment.replies && comment.replies.map(reply => (
        <Comment key={reply.id} comment={reply} isReply={true} />
      ))}
    </div>
  );
}

export default Comment;