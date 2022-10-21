import { About, Login, PostDetail, Posts, Users } from '../pages';

export const privateRoutes = [
  {path: '/about', component: About, exact: true},
  {path: '/posts', component: Posts, exact: true},
  {path: '/users', component: Users, exact: true},
  {path: '/posts/:id', component: PostDetail, exact: true},
];

export const publicRoutes = [
  {path: '/login', component: Login, exact: true},
];