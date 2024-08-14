import React, { useState, useMemo } from 'react';
import { useSelector } from 'react-redux';
import Comment from './Comment';

function CommentList() {
  const comments = useSelector(state => state.comments);
  const [sortOrder, setSortOrder] = useState('desc');

  const sortedComments = useMemo(() => {
    return [...comments].sort((a, b) => {
      return sortOrder === 'asc' ? new Date(a.date) - new Date(b.date) : new Date(b.date) - new Date(a.date);
    });
  }, [comments, sortOrder]);

  return (
    <div className="comment-list">
      <div className="sort-by" onClick={() => setSortOrder(sortOrder === 'desc' ? 'asc' : 'desc')}>
        Sort By: Date and Time {sortOrder === 'desc' ? '↓' : '↑'}
      </div>
      {sortedComments.map(comment => (
        <Comment key={comment.id} comment={comment} />
      ))}
    </div>
  );
}

export default CommentList;
