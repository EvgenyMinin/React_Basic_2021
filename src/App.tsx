import React, { useState } from 'react';

import PostForm from './components/PostForm';
import PostList from './components/PostList';
import { Post } from './models/Post';

import './styles/App.css';

const App = () => {
  const [posts, setPosts] = useState<Post[]>([
    { id: 1, title: 'JS', body: 'Description' },
    { id: 2, title: 'JS 2', body: 'Description' },
    { id: 3, title: 'JS 3', body: 'Description' },
  ]);

  const createPostHandler = (newPost: Post) => {
    setPosts([...posts, newPost]);
  };

  return (
    <div className="app">
      <PostForm onCreatePost={createPostHandler} />
      <PostList posts={posts} />
    </div>
  );
};

export default App;
