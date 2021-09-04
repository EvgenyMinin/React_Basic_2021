import React, { useState } from 'react';

import PostForm from './components/PostForm';
import PostList from './components/PostList';
import { Post } from './models/Post';

import './styles/App.css';
import css from './App.module.css';

const App = () => {
  const [posts, setPosts] = useState<Post[]>([
    { id: 1, title: 'JS', body: 'Description' },
    { id: 2, title: 'JS 2', body: 'Description' },
    { id: 3, title: 'JS 3', body: 'Description' },
  ]);

  const createPostHandler = (newPost: Post) => {
    setPosts([...posts, newPost]);
  };

  const removePost = (id: number) => {
    setPosts(posts.filter(p => p.id !== id));
  };

  return (
    <div className="app">
      <PostForm onCreatePost={createPostHandler} />
      {posts.length ? (
        <PostList posts={posts} title="Посты про JS" removePost={removePost} />
      ) : (
        <h2 className={css.subtitle}>Посты не найдены</h2>
      )}
    </div>
  );
};

export default App;
