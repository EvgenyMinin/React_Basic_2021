import React, { ChangeEvent, MouseEvent, useState } from 'react';

import { Input, Button } from './UI';
import { Post } from '../models/Post';

import css from './PostForm.module.css';

interface PostInput {
  title: string;
  body: string;
}

interface PostFormProps {
  onCreatePost: ({id, title, body}: Post) => void;
}

export const PostForm = ({ onCreatePost }: PostFormProps) => {
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
    const newPost = {
      ...postInput,
      id: Date.now(),
    };
    onCreatePost(newPost);
    setPostInput({
      title: '',
      body: '',
    });
  };
  return (
    <form className={css.form}>
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
  );
};
