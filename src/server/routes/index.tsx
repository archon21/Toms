// Server
import { Router } from 'express';
import path from 'path';

// Client
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { ServerStyleSheet } from 'styled-components'; // <-- importing ServerStyleSheet

import * as htmlRoutesConfig from './html';
import * as apiRoutsConfig from './api';
import { getTitle, html } from '../util';
import App from '../../client/App';

interface Method {
  method: string;
}

interface Route {
  url: string;
  title: string;
  methods: Array<Method>;
}

console.log(htmlRoutesConfig, apiRoutsConfig);
const router = Router();

const createRoute = ({ methods, url, title }: Route) => {
  methods.forEach(({ method }: Method) => {
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
        res.send(html({ body, title, styles }));
      });
    }
  });
};

Object.entries(htmlRoutesConfig).forEach(([key, route]) => {
  console.log(key, route);
  createRoute(route);
});

export default router;
