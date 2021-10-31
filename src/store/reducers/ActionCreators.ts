import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { Post } from '../../models';

export const fetchPosts = createAsyncThunk(
  'post/fetchAll',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get<Post[]>(
        'https://jsonplaceholder.typicode.com/po3sts'
      );

      return data;
    } catch (error) {
      const result = (error as Error).message;
      rejectWithValue(result);
    }
  }
);
