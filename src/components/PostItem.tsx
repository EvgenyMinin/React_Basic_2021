import React from 'react';

import './PostItem.css';

type PostItemProps = {
  number: number;
  title: string;
  body: string;
};

const PostItem = ({ number, title, body }: PostItemProps) => {
  return (
    <div className="post">
      <div className="post__content">
        <strong>
          {number}. {title}
        </strong>
        <div>{body}</div>
      </div>
      <div className="post__btns">
        <button>Удалить</button>
      </div>
    </div>
  );
};

export default PostItem;
