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

interface Service {
  action: string;
  service: string;
  stateName: string;
}

interface Method {
  method: string;
  services: Array<Service>;
}

interface Route {
  url: string;
  title: string;
  methods: Array<Method>;
}

const router = Router();

const handleService = (services: Array<Service>) => {
  const defaultState = {};
  services.forEach(async ({ service, action, stateName }) => {
    if (action === 'GET') {
      const data = await Base.get();
      console.log(data, 'asdfasdfasdfasdfasd');
      defaultState[stateName] = data;
    }
  });
  return defaultState;
};

const createRoute = ({ methods, url, title }: Route) => {
  methods.forEach(async ({ method, services }: Method) => {
    const defaultState = await handleService(services);

    if (method === 'GET') {
      router.get(url, (req, res) => {
        const context = {};
        const sheet = new ServerStyleSheet();

        const body = ReactDOMServer.renderToString(
          <StaticRouter location={req.url} context={context}>
            {sheet.collectStyles(<App />)}
          </StaticRouter>
        );
        const styles = sheet.getStyleTags();

        const indexFile = path.resolve('./build/index.html');
        res.send(html({ body, title, styles, defaultState }));
      });
    }
  });
};

Object.entries(htmlRoutesConfig).forEach(([key, route]) => {
  createRoute(route);
});

export default router;
