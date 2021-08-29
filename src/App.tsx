import React, { ChangeEvent, MouseEvent, useState } from 'react';

import PostList from './components/PostList';
import Button from './components/UI/button/Button';
import Input from './components/UI/input/Input';
import { Post } from './models/Post';

import './styles/App.css';

interface PostInput {
  title: string;
  body: string;
}

const App = () => {
  const [posts, setPosts] = useState<Post[]>([
    { id: 1, title: 'JS', body: 'Description' },
    { id: 2, title: 'JS 2', body: 'Description' },
    { id: 3, title: 'JS 3', body: 'Description' },
  ]);
  const [postInput, setPostInput] = useState<PostInput>({
    title: '',
    body: '',
  });

  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setPostInput({
      ...postInput,
      [e.target.name]: e.target.value,
    });
  };

  const addNewPost = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setPosts([...posts, { ...postInput, id: Date.now() }]);
    setPostInput({
      title: '',
      body: '',
    });
  };

  return (
    <div className="app">
      <form>
        <Input
          type="text"
          name="title"
          placeholder="Название поста"
          value={postInput.title}
          onChange={changeHandler}
        />
        <Input
          type="text"
          name="body"
          placeholder="Описание поста"
          value={postInput.body}
          onChange={changeHandler}
        />
        <Button onClick={addNewPost}>Создать пост</Button>
      </form>
      <PostList posts={posts} />
    </div>
  );
};

export default App;
