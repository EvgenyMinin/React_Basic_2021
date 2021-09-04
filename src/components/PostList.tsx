import React from 'react';
import { Post } from '../models/Post';
import PostItem from './PostItem';

import './PostList.css';

interface PostListProps {
  title: string;
  posts: Post[];
  removePost: (id: number) => void;
}

const PostList = ({ posts, title, removePost }: PostListProps) => (
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

export default PostList;
