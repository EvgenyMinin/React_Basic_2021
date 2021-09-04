import React from 'react';

import { Button } from './UI';

import './PostItem.css';

type PostItemProps = {
  number: number;
  title: string;
  body: string;
  postId: number;
  removePost: (id: number) => void; 
};

export const PostItem = ({ postId, number, title, body, removePost }: PostItemProps) => {
  return (
    <div className="post">
      <div className="post__content">
        <strong>
          {number}. {title}
        </strong>
        <div>{body}</div>
      </div>
      <div className="post__btns">
        <Button onClick={() => removePost(postId)}>Удалить</Button>
      </div>
    </div>
  );
};
