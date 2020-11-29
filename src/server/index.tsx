import express from 'express';

import routes from './routes';

const app = express();

app.use(routes);

app.use(express.static('./dist'));

export default app;
