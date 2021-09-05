import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { About, Error, PostDetail, Posts } from '../pages';

export const AppRouter = () => {
  return (
    <Switch>
      <Route path="/about">
        <About />
      </Route>

      <Route exact path="/posts">
        <Posts />
      </Route>

      <Route path="/posts/:id">
        <PostDetail />
      </Route>

      <Route path="/error">
        <Error />
      </Route>

      <Redirect to="/error" />
    </Switch>
  );
};
