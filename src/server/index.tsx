import express from 'express';
import path from 'path';
import routes from './routes';

const app = express();

app.use(express.json());
app.use(express.static('./dist'));

app.use(routes);

export default app;
