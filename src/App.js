import React from 'react';
import CommentForm from './components/CommentForm';
import CommentList from './components/CommentList';

function App() {
  return (
    <div className="app">
      <h1>Comments Section</h1>
      <CommentForm />
      <CommentList />
    </div>
  );
}

export default App;