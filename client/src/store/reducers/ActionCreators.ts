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
      const { data } = await axios.get<string>('http://localhost:5000/status');

      return data;
    } catch (error) {
      const result = (error as Error).message;
      rejectWithValue(result);
    }
  }
);
