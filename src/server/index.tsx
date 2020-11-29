import express from 'express';
import path from 'path';
import routes from './routes';

const app = express();

app.use(routes);

app.use(express.static('./dist'));
// app.use(express.static(path.join(__dirname, 'public')));

export default app;
