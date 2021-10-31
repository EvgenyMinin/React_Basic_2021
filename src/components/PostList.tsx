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

export const PostList = ({ posts, title, removePost }: PostListProps) => (
  <>
    <h1>{title}</h1>

    <TransitionGroup>
      {posts.map(({ id, title, body }) => (
        <CSSTransition key={id} timeout={500} classNames="post">
          <PostItem
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
