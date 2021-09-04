import React from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

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

      <TransitionGroup>
        {posts.map(({ id, title, body }, index) => (
          <CSSTransition key={id} timeout={500} classNames='post'>
            <PostItem
              number={index + 1}
              title={title}
              body={body}
              postId={id}
              removePost={removePost}
            />
          </CSSTransition>
        ))}
      </TransitionGroup>
    </>
  );
};
