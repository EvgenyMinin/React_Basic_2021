import React, { useEffect } from 'react';

import { Loader, PostList } from '../components';
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import { fetchPosts, getStatus } from '../store/reducers/ActionCreators';

export const Posts = () => {
  const dispatch = useAppDispatch();
  const { posts, isLoading, error } = useAppSelector(
    state => state.postReducer
  );
  const { status } = useAppSelector(state => state.statusReducer);

  useEffect(() => {
    dispatch(fetchPosts());
    dispatch(getStatus());
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <>
      {error && <h2>{error}</h2>}

      <div>{status}</div>

      <PostList
        posts={posts || []}
        title="Посты про JS"
        removePost={() => {}}
      />
    </>
  );
};
