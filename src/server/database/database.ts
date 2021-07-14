import mongoose from "mongoose";

import { siteConfig } from "../../site-config";


const database = mongoose.connect(
  siteConfig.server.database.connection.development,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  }
);

export default database;
