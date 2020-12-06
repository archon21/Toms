import { Client } from 'faunadb';

const clientKey = process.env.ADMIN_KEY ? process.env.ADMIN_KEY : '';

const faunaClient = new Client({
  secret: clientKey,
});

export default faunaClient;
