import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { privateRoutes, publicRoutes } from '../router';

export const AppRouter = () => {
  const isAuth = false;
  return isAuth ? (
    <Switch>
      {privateRoutes.map(({ path, component, exact }) => (
        <Route path={path} component={component} exact={exact} />
      ))}
      <Redirect to="/posts" />
    </Switch>
  ) : (
    <Switch>
      {publicRoutes.map(({ path, component, exact }) => (
        <Route path={path} component={component} exact={exact} />
      ))}
      <Redirect to="/login" />
    </Switch>
  );
};
