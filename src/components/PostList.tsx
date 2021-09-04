import React from 'react';

import { PostItem } from './PostItem';
import { Post } from '../models/Post';

import css from './PostList.module.css';

interface PostListProps {
  title: string;
  posts: Post[];
  removePost: (id: number) => void;
}

export const PostList = ({ posts, title, removePost }: PostListProps) => {
  if (!posts.length) {
    return <h2 className={css.subtitle}>Посты не найдены</h2>;
  }

  return (
    <>
      <h1>{title}</h1>

      {posts.map(({ id, title, body }, index) => (
        <PostItem
          key={id}
          number={index + 1}
          title={title}
          body={body}
          postId={id}
          removePost={removePost}
        />
      ))}
    </>
  );
};
