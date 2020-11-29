import path from 'path';
import fs from 'fs';

import React from 'react';
import express from 'express';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { ServerStyleSheet } from 'styled-components'; // <-- importing ServerStyleSheet

import App from '../App';
import { getTitle, html } from './util';

const PORT = process.env.PORT || 3006;
const app = express();

app.get('/', (req, res) => {
  const context = {};
  const sheet = new ServerStyleSheet();

  const body = ReactDOMServer.renderToString(
    <StaticRouter location={req.url} context={context}>
      {sheet.collectStyles(<App />)}
    </StaticRouter>
  );
  const styles = sheet.getStyleTags();
  const title = getTitle({ url: req.url });
  const indexFile = path.resolve('./build/index.html');
  res.send(html({ body, title, styles }));
});

app.use(express.static('./build'));

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
