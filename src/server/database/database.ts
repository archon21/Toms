import mongoose from "mongoose";

import { siteConfig } from "../../site-config";

mongoose.connect(siteConfig.server.database.connection.development, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

const connection = mongoose.connection;



export default connection;
