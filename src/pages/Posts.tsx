import React, { useEffect, useState } from 'react';

import {
  Button,
  Modal,
  Pagination,
  PostFilter,
  PostForm,
  PostList,
} from '../components';

import PostService from '../api/PostServiceAPI';
import { useFetching, usePosts } from '../hooks';
import { Filter, Post } from '../models';
import { getPageCount } from '../utils';

export const Posts = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [filter, setFilter] = useState<Filter>({ sort: '', query: '' });
  const [visible, setVisible] = useState<boolean>(false);
  const [totalPages, setTotalPages] = useState<number>(0);
  const [limit, setLimit] = useState<number>(10);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);
  const [fetchPost, isPostsLoading, postError] = useFetching(
    async (limit: number, currentPage: number) => {
      const { data, headers } = await PostService.getAll(limit, currentPage);
      setPosts(data);
      const totalCount = headers['x-total-count'];
      setTotalPages(getPageCount(totalCount, limit));
    }
  );

  const createPostHandler = (newPost: Post) => {
    setPosts([...posts, newPost]);
    setVisible(false);
  };

  const removePost = (id: number) => {
    setPosts(posts.filter(p => p.id !== id));
  };

  const changePage = (currentPage: number) => {
    setCurrentPage(currentPage);
    fetchPost(limit, currentPage);
  };

  useEffect(() => {
    fetchPost(limit, currentPage);
  }, []);

  return (
    <>
      <Button
        onClick={() => {
          setVisible(true);
        }}
      >
        Создать пост
      </Button>

      <Modal visible={visible} setVisible={setVisible}>
        <PostForm onCreatePost={createPostHandler} />
      </Modal>

      <PostFilter filter={filter} setFilter={setFilter} />

      {postError && <h2>Произошла ошибка</h2>}

      {isPostsLoading ? (
        <h2>Загрузка данных...</h2>
      ) : (
        <PostList
          posts={sortedAndSearchedPosts}
          title="Посты про JS"
          removePost={removePost}
        />
      )}

      <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        changePage={changePage}
      />
    </>
  );
};
