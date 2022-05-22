// Server
import { Router } from "express";
import path from "path";
import fs from "fs";
import multer from "multer";
import MulterGoogleStorage from "multer-google-storage";

console.log(
  path.join(
    __dirname,
    "..",

    siteConfig.server.storage.keyFile
  )
);

const fileStorageEngine = multer.diskStorage({
  destination: (req, file, cb) => {
    const pathToUse = path.join(__dirname, "temp-images");
    if (!fs.existsSync(pathToUse)) fs.mkdirSync(pathToUse);

    cb(null, pathToUse);
  },
  fileName: (req, file, cb) => {
    cb(null, Date.now() + "--" + file.originalName);
  },
});

const upload = multer({ storage: fileStorageEngine });

console.log(multer.diskStorage, "MULTER");

// Client
import React from "react";
import ReactDOMServer from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import { ServerStyleSheet } from "styled-components"; // <-- importing ServerStyleSheet

import { html } from "../util";
import App from "../../client/App";
import { Interfaces, siteConfig } from "../../site-config";
import { Services } from "../database";

const router = Router();

const handleService = async (services: Array<Interfaces.Service>) => {
  const defaultState = {};

  for (let i = 0; i < services.length; i++) {
    const { service, action, stateName, accessorName } = services[i];
    if (typeof Services[service][action] === "function")
      if (action === "GET") {
        const data = await Services[service][action]({
          request: { params: { page: accessorName } },
        });
        defaultState[stateName] = data;
      }
  }

  return defaultState;
};

const createRoute = ({ methods, url, title }: Interfaces.Route) => {
  methods.forEach(async ({ method, services }: Interfaces.Method) => {
    if (method === "GET") {
      router.get(url, async (req, res) => {
        const defaultState = await handleService(services);
        const context = {};
        const sheet = new ServerStyleSheet();

        const body = ReactDOMServer.renderToStaticMarkup(
          <StaticRouter location={req.url} context={context}>
            {sheet.collectStyles(<App defaultState={defaultState} />)}
          </StaticRouter>
        );
        const styles = sheet.getStyleTags();

        res.end(html({ body, title, styles, defaultState }));
      });
    }
  });
};

Object.entries(siteConfig.server.htmlRoutes).forEach(([key, route]) => {
  createRoute(route);
});

Object.entries(Services).forEach(([serviceName, service]) => {  
  Object.entries(service).forEach(([methodType, method]) => {
    if (serviceName.toLowerCase() === "storage") {
      router[methodType.toLowerCase()](
        `/api/${serviceName.toLowerCase()}`,
        upload.array("files", 100),
        (req, res) => method({ request: req, response: res })
      );
    } else
      router[methodType.toLowerCase()](
        `/api/${serviceName.toLowerCase()}`,
        (req, res) => method({ request: req, response: res })
      );
  });
});

export default router;
