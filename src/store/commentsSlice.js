import { createSlice } from '@reduxjs/toolkit';

const commentsSlice = createSlice({
  name: 'comments',
  initialState: JSON.parse(localStorage.getItem('comments')) || [],
  reducers: {
    addComment: (state, action) => {
      const newComment = {
        id: Date.now(),
        name: action.payload.name,
        comment: action.payload.comment,
        date: new Date().toISOString(),
        replies: []
      };
      state.unshift(newComment);
      localStorage.setItem('comments', JSON.stringify(state));
    },
    editComment: (state, action) => {
      const { id, comment } = action.payload;
      const commentToEdit = state.find(c => c.id === id) || 
                            state.flatMap(c => c.replies).find(r => r.id === id);
      if (commentToEdit) {
        commentToEdit.comment = comment;
        localStorage.setItem('comments', JSON.stringify(state));
      }
    },
    deleteComment: (state, action) => {
      const index = state.findIndex(c => c.id === action.payload);
      if (index !== -1) {
        state.splice(index, 1);
      } else {
        for (let comment of state) {
          const replyIndex = comment.replies.findIndex(r => r.id === action.payload);
          if (replyIndex !== -1) {
            comment.replies.splice(replyIndex, 1);
            break;
          }
        }
      }
      localStorage.setItem('comments', JSON.stringify(state));
    },
    addReply: (state, action) => {
      const { parentId, name, comment } = action.payload;
      const parentComment = state.find(c => c.id === parentId);
      if (parentComment) {
        const newReply = {
          id: Date.now(),
          name,
          comment,
          date: new Date().toISOString()
        };
        parentComment.replies.push(newReply);
        localStorage.setItem('comments', JSON.stringify(state));
      }
    }
  }
});

export const { addComment, editComment, deleteComment, addReply } = commentsSlice.actions;
export default commentsSlice.reducer;