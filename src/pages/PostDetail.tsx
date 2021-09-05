import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { Comments, Loader, PostDetailItem } from '../components';

import PostService from '../api/PostServiceAPI';
import { useFetching } from '../hooks';
import { Comment, Post } from '../models';

export const PostDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [post, setPost] = useState<Post>();
  const [comments, setComments] = useState<Comment[]>([]);

  const [fetchPostById, isPostLoading] = useFetching(async (id: string) => {
    const { data } = await PostService.getById(id);
    setPost(data);
  });

  const [fetchComments, isCommentsLoading] = useFetching(async (id: string) => {
    const { data } = await PostService.getCommentsByPostId(id);
    setComments(data);
  });

  useEffect(() => {
    fetchPostById(id);
    fetchComments(id);
  }, [id]);

  return (
    <div>
      {isPostLoading ? <Loader /> : <PostDetailItem post={post} />}
      {isCommentsLoading ? <Loader /> : <Comments comments={comments} />}
    </div>
  );
};
