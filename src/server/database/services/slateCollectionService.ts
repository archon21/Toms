import { query } from 'faunadb';
import { Interfaces } from '../../../site-config';

import faunaClient from '../database';

class SlateCollection {
  async get() {
    return ['PNY', 'SDF', 'ADF'];
  }
  async create(data: object) {
    const doc: Interfaces.SlateCollection = await faunaClient.query(
      query.Create(query.Collection('slateCollection'), {
        data,
      })
    );
    console.log(doc);
    return doc;
  }
}

const slateCollection = new SlateCollection();

export default slateCollection;
