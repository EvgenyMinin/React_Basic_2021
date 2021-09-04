import axios from 'axios';
import React, { useEffect, useState } from 'react';

import { Button, Modal, PostFilter, PostForm, PostList } from './components';
import { usePosts } from './hooks';
import { Filter, Post } from './models';

import './styles/App.css';

const App = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [filter, setFilter] = useState<Filter>({ sort: '', query: '' });
  const [visible, setVisible] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);

  const createPostHandler = (newPost: Post) => {
    setPosts([...posts, newPost]);
    setVisible(false);
  };

  const removePost = (id: number) => {
    setPosts(posts.filter(p => p.id !== id));
  };

  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get(
          'https://jsonplaceholder.typicode.com/posts'
        );
        setPosts(data);
        setIsLoading(false);
      } catch (error) {
        console.log('error', error);
      }
    })();
  }, []);

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

      {isLoading ? (
        <h2>Загрузка данных...</h2>
      ) : (
        <PostList
          posts={sortedAndSearchedPosts}
          title="Посты про JS"
          removePost={removePost}
        />
      )}
    </div>
  );
};

export default App;
