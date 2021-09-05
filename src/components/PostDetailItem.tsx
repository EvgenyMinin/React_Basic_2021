import React from 'react';

import { Post } from '../models';

import css from './PostDetailItem.module.css';

interface PostDetailItemProps {
  post?: Post;
}

export const PostDetailItem = ({ post }: PostDetailItemProps) => (
  <>
    <h2 className={css.postTitle}>
      {post?.id}. {post?.title}
    </h2>
    <p className={css.postText}>{post?.body}</p>
  </>
);
