// Server
import { Router } from 'express';
import path from 'path';

// Client
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { ServerStyleSheet } from 'styled-components'; // <-- importing ServerStyleSheet

import * as htmlRoutesConfig from './html';
// import * as apiRoutsConfig from './api';
import { getTitle, html } from '../util';
import App from '../../client/App';
import { Base } from '../database/schema';
import { Interfaces } from '../../site-config';

const router = Router();

const handleService = (services: Array<Interfaces.Service>) => {
  const defaultState = {};
  services.forEach(async ({ service, action, stateName }) => {
    if (action === 'GET') {
      const data = await Base.get();

      defaultState[stateName] = data;
    }
  });
  return defaultState;
};

const createRoute = ({ methods, url, title }: Interfaces.Route) => {
  methods.forEach(async ({ method, services }: Interfaces.Method) => {
    const defaultState = await handleService(services);

    if (method === 'GET') {
      router.get(url, (req, res) => {
        const context = {};
        const sheet = new ServerStyleSheet();

        const body = ReactDOMServer.renderToStaticMarkup(
          <StaticRouter location={req.url} context={context}>
            {sheet.collectStyles(<App defaultState={defaultState} />)}
          </StaticRouter>
        );
        const styles = sheet.getStyleTags();

        res.end(html({ body, title, styles, defaultState }));
      });
    }
  });
};

Object.entries(htmlRoutesConfig).forEach(([key, route]) => {
  createRoute(route);
});

export default router;
