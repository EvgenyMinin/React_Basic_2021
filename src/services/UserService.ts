import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { User } from '../models/User';

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://jsonplaceholder.typicode.com/',
  }),
  endpoints: builder => ({
    fetchAllUsers: builder.query<User[], number>({
      query: (limit: number = 5) => ({
        url: '/users',
        params: {
          _limit: limit,
        },
      }),
    }),
  }),
});
