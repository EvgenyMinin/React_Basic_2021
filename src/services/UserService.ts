import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { User } from '../models/User';

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:5000/',
  }),
  tagTypes: ['User'],
  endpoints: builder => ({
    fetchAllUsers: builder.query<User[], number>({
      query: (limit: number = 5) => ({
        url: '/users',
        params: {
          _limit: limit,
        },
      }),
      providesTags: result => ['User'],
    }),
    createUser: builder.mutation<User, User>({
      query: (user: User) => ({
        url: '/users',
        method: 'POST',
        body: user,
      }),
      invalidatesTags: ['User'],
    }),
    updateUser: builder.mutation<User, User>({
      query: (user: User) => ({
        url: `/users/${user.id}`,
        method: 'PUT',
        body: user,
      }),
      invalidatesTags: ['User'],
    }),
    deleteUser: builder.mutation<User, User>({
      query: (user: User) => ({
        url: `/users/${user.id}`,
        method: 'DELETE',
        body: user,
      }),
      invalidatesTags: ['User'],
    }),
  }),
});
