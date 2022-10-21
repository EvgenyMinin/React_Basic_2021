import React from 'react';
import { useHistory } from 'react-router-dom';

import { Button } from './UI';

import css from './PostItem.module.css';

type PostItemProps = {
  title: string;
  body: string;
  postId: number;
  removePost: (id: number) => void; 
};

export const PostItem = ({ postId, title, body, removePost }: PostItemProps) => {
  const router = useHistory();

  return (
    <div className={css.post}>
      <div>
        <strong>
          {postId}. {title}
        </strong>
        <div>{body}</div>
      </div>
      <div className={css.postBtn}>
        <Button onClick={() => router.push(`/posts/${postId}`)}>Открыть</Button>
        <Button onClick={() => removePost(postId)} className={css.deleteBtn}>Удалить</Button>
      </div>
    </div>
  );
};
