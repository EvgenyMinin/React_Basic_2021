import React, { useEffect } from 'react';

import { Loader, PostList } from '../components';
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import { fetchPosts } from '../store/reducers/ActionCreators';

export const Posts = () => {
  const dispatch = useAppDispatch();
  const { posts, isLoading, error } = useAppSelector(
    state => state.postReducer
  );

  useEffect(() => {
    dispatch(fetchPosts());
  }, []);

  return (
    <>
      {isLoading && <Loader />}

      {error && <h2>{error}</h2>}

      <PostList
        posts={posts || []}
        title="Посты про JS"
        removePost={() => {}}
      />
    </>
  );
};
