import React, { useState } from 'react';

import PostForm from './components/PostForm';
import PostList from './components/PostList';
import { Post } from './models/Post';

import './styles/App.css';
import css from './App.module.css';
import Select from './components/UI/select/Select';
import { Option } from './models/types';

const sortOptions: Option[] = [
  { value: 'title', name: 'По названию' },
  { value: 'body', name: 'По описанию' },
];

const App = () => {
  const [posts, setPosts] = useState<Post[]>([
    { id: 1, title: 'aaa', body: 'bbb' },
    { id: 2, title: 'ddd', body: 'aaa' },
    { id: 3, title: 'eee', body: 'zzz' },
  ]);
  const [selectedSort, setSelectedSort] = useState<string>('');

  const createPostHandler = (newPost: Post) => {
    setPosts([...posts, newPost]);
  };

  const removePost = (id: number) => {
    setPosts(posts.filter(p => p.id !== id));
  };

  const sortPost = (sort: string) => {
    setSelectedSort(sort);
    const sorted = [...posts].sort((a, b) => a[sort as keyof Omit<Post, 'id'>].localeCompare(b[sort as keyof Omit<Post, 'id'>]));
    setPosts(sorted);
  };

  return (
    <div className="app">
      <PostForm onCreatePost={createPostHandler} />

      <div className={css.selectContainer}>
        <Select
          value={selectedSort}
          onChange={sortPost}
          defaultValue="Сортировка"
          options={sortOptions}
        />
      </div>

      {posts.length ? (
        <PostList posts={posts} title="Посты про JS" removePost={removePost} />
      ) : (
        <h2 className={css.subtitle}>Посты не найдены</h2>
      )}
    </div>
  );
};

export default App;
