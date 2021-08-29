import React from 'react';
import { Post } from '../models/Post';
import PostItem from './PostItem';

import './PostList.css';

interface PostListProps {
  posts: Post[];
}

const PostList = ({posts}: PostListProps) => {
    return (
    <>
      <h1>Список постов</h1>

      {posts.map(({ id, title, body }, index) => (
        <PostItem key={id} number={index + 1} title={title} body={body} />
      ))}
    </>
  );
};

export default PostList;
