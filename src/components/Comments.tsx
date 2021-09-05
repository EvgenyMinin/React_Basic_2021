import React from 'react';
import { Comment } from '../models';

import css from './Comments.module.css';

interface CommentsProps {
  comments: Comment[];
}

export const Comments = ({ comments }: CommentsProps) => (
  <>
    <div className={css.commentContainer}>
      <h2>Комментарии</h2>
      {comments.map(({ id, email, body }) => (
        <div key={id} className={css.commentWrapper}>
          <p className={css.email}>{email}</p>
          <p className={css.body}>{body}</p>
        </div>
      ))}
    </div>
  </>
);
