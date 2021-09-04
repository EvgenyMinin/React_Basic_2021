import React from 'react';

import { Button } from './UI';

import './PostItem.css';

type PostItemProps = {
  title: string;
  body: string;
  postId: number;
  removePost: (id: number) => void; 
};

export const PostItem = ({ postId, title, body, removePost }: PostItemProps) => {
  return (
    <div className="post">
      <div>
        <strong>
          {postId}. {title}
        </strong>
        <div>{body}</div>
      </div>
      <div className="postBtn">
        <Button onClick={() => removePost(postId)}>Удалить</Button>
      </div>
    </div>
  );
};
