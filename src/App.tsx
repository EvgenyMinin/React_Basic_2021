import React, { ChangeEvent, useMemo, useState } from 'react';

import PostForm from './components/PostForm';
import PostList from './components/PostList';
import { Post } from './models/Post';

import './styles/App.css';
import css from './App.module.css';
import Select from './components/UI/select/Select';
import { Option } from './models/types';
import Input from './components/UI/input/Input';

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
  const [searchQuery, setSearchQuery] = useState<string>('');

  const sortedPost = useMemo(() => {
    console.log('sorted posts');
    return selectedSort
      ? [...posts].sort((a, b) =>
          a[selectedSort as keyof Omit<Post, 'id'>].localeCompare(
            b[selectedSort as keyof Omit<Post, 'id'>]
          )
        )
      : posts;
  }, [selectedSort, posts]);

  const sortedAndSearchedPosts = useMemo(() => {
    return sortedPost.filter(post =>
      post.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery, sortedPost]);

  const createPostHandler = (newPost: Post) => {
    setPosts([...posts, newPost]);
  };

  const removePost = (id: number) => {
    setPosts(posts.filter(p => p.id !== id));
  };

  const sortPost = (sort: string) => {
    setSelectedSort(sort);
  };

  const onSearchHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className="app">
      <PostForm onCreatePost={createPostHandler} />

      <div className={css.selectContainer}>
        <Input
          value={searchQuery}
          onChange={onSearchHandler}
          placeholder="Поиск"
        />
        <Select
          value={selectedSort}
          onChange={sortPost}
          defaultValue="Сортировка"
          options={sortOptions}
        />
      </div>

      {sortedAndSearchedPosts.length ? (
        <PostList
          posts={sortedAndSearchedPosts}
          title="Посты про JS"
          removePost={removePost}
        />
      ) : (
        <h2 className={css.subtitle}>Посты не найдены</h2>
      )}
    </div>
  );
};

export default App;
