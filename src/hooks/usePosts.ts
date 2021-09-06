import { useMemo } from 'react';

import { Post } from '../models';

export const useSortedPost = (posts: Post[], sort: string | number) => {
  const sortedPost = useMemo(() => {
    return sort
      ? [...posts].sort((a, b) =>
          a[sort as keyof Omit<Post, 'id'>].localeCompare(
            b[sort as keyof Omit<Post, 'id'>]
          )
        )
      : posts;
  }, [sort, posts]);

  return sortedPost;
};

export const usePosts = (posts: Post[], sort: string | number, query: string) => {
  const sortedPosts = useSortedPost(posts, sort);

  const sortedAndSearchedPosts = useMemo(() => {
    return sortedPosts.filter(post =>
      post.title.toLowerCase().includes(query.toLowerCase())
    );
  }, [query, sortedPosts]);

  return sortedAndSearchedPosts;
};
