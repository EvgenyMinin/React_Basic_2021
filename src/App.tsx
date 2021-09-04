import React, { useMemo, useState } from 'react';

import { Button, Modal, PostFilter, PostForm, PostList } from './components';
import { Filter, Post } from './models';

import './styles/App.css';

const App = () => {
  const [posts, setPosts] = useState<Post[]>([
    { id: 1, title: 'aaa', body: 'bbb' },
    { id: 2, title: 'ddd', body: 'aaa' },
    { id: 3, title: 'eee', body: 'zzz' },
  ]);
  const [filter, setFilter] = useState<Filter>({ sort: '', query: '' });
  const [visible, setVisible] = useState<boolean>(false);

  const sortedPost = useMemo(() => {
    return filter.sort
      ? [...posts].sort((a, b) =>
          a[filter.sort as keyof Omit<Post, 'id'>].localeCompare(
            b[filter.sort as keyof Omit<Post, 'id'>]
          )
        )
      : posts;
  }, [filter.sort, posts]);

  const sortedAndSearchedPosts = useMemo(() => {
    return sortedPost.filter(post =>
      post.title.toLowerCase().includes(filter.query.toLowerCase())
    );
  }, [filter.query, sortedPost]);

  const createPostHandler = (newPost: Post) => {
    setPosts([...posts, newPost]);
    setVisible(false);
  };

  const removePost = (id: number) => {
    setPosts(posts.filter(p => p.id !== id));
  };

  return (
    <div className="app">
      <Button
        onClick={() => {
          setVisible(true);
        }}
      >
        Создать пост
      </Button>

      <Modal visible={visible} setVisible={setVisible}>
        <PostForm onCreatePost={createPostHandler} />
      </Modal>

      <PostFilter filter={filter} setFilter={setFilter} />

      <PostList
        posts={sortedAndSearchedPosts}
        title="Посты про JS"
        removePost={removePost}
      />
    </div>
  );
};

export default App;
