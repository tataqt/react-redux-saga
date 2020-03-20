import React from 'react';
import Posts from './components/Posts';
import PostForm from './components/PostForm';
import FetchedPost from './components/FetchedPost';

function App() {
  return (
    <div className="container pt-3">
      <div className="row">
        <div className="col">
          <PostForm />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <h2>Cинхронные посты</h2>
          <Posts posts={[1, 2, 3]} />
        </div>
        <div className="col">
          <h2>Асинхронные посты</h2>
          <FetchedPost posts={[]} />
        </div>
      </div>
    </div>
  );
}

export default App;
