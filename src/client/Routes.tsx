import React from 'react';
import { Switch, Route } from 'react-router-dom';

import * as Pages from './pages';
import * as htmlRoutesConfig from '../server/routes/html';
import { Interfaces } from '../site-config';

interface Props {
  defaultState: object;
}

const createRoute = (htmlRoutesConfig: object, defaultState: object) => {
  const routes = Object.entries(htmlRoutesConfig).map(
    ([key, { component, url }]: [string, Interfaces.Route]) => {
      const ComponentToRender = Pages[component];
      return (
        <Route
          exact
          path={url}
          render={() => <ComponentToRender defaultState={defaultState} />}
        ></Route>
      );
    }
  );
  return routes;
};

const Routes: React.FC<Props> = ({ defaultState }) => {
  const routes = createRoute(htmlRoutesConfig, defaultState);

  return <Switch>{routes}</Switch>;
};

export default Routes;
