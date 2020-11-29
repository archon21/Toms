import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Pages from './pages';
import * as htmlRoutesConfig from '../server/routes/html';
import { Interfaces } from '../site-config';

const createRoute = (htmlRoutesConfig: object) => {
  const routes = Object.entries(htmlRoutesConfig).map(
    ([key, { component }]: [string, Interfaces.Route]) => {
      return <Route component={Pages[component]}></Route>;
    }
  );
  return routes;
};

const routes = createRoute(htmlRoutesConfig);

const Routes = () => {
  return <Switch>{routes}</Switch>;
};

export default Routes;
