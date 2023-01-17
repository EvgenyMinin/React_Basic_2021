import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { Post } from '../../models';

export const fetchPosts = createAsyncThunk(
  'post/fetchAll',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get<Post[]>(
        'https://jsonplaceholder.typicode.com/posts'
      );

      return data;
    } catch (error) {
      const result = (error as Error).message;
      rejectWithValue(result);
    }
  }
);

export const getStatus = createAsyncThunk(
  'status/getStatus',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get<{ status: string }>(
        'http://127.0.0.1:54790/status'
      );
      return data.status;
    } catch (error) {
      const result = (error as Error).message;
      rejectWithValue(result);
    }
  }
);
