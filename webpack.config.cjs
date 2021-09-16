"use-strict";

const fs = require("fs");
const path = require("path");
const webpack = require("webpack");
const nodeExternals = require("webpack-node-externals");



function copyFileSync(source, target) {
  var targetFile = target;
  if (fs.existsSync(target)) {
    if (fs.lstatSync(target).isDirectory()) {
      targetFile = path.join(target, path.basename(source));
    }
  }
  fs.writeFileSync(targetFile, fs.readFileSync(source));
}

function copyFolderRecursiveSync(source, target) {
  var files = [];
  var targetFolder = path.join(target, path.basename(source));
  if (!fs.existsSync(targetFolder)) {
    fs.mkdirSync(targetFolder);
  }
  if (fs.lstatSync(source).isDirectory()) {
    files = fs.readdirSync(source);
    files.forEach(function (file) {
      var curSource = path.join(source, file);
      if (fs.lstatSync(curSource).isDirectory()) {
        copyFolderRecursiveSync(curSource, targetFolder);
      } else {
        copyFileSync(curSource, targetFolder);
      }
    });
  }
}

const Config = (entry, name, target, path, isPostProcess, plugins) => {
  copyFolderRecursiveSync("./public/assets", "./dist");
  copyFolderRecursiveSync("./public/js", "./dist");

  return {
    entry,
    target,
    externals: name === "server" ? [nodeExternals()] : { React: "react" },
    output: {
      path,
      filename: `bundle.${name}.js`,
    },
    mode: "development",
    resolve: {
      extensions: [".ts", ".tsx", ".js"],
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx|tsx|ts)$/,
          loader: "babel-loader",
          exclude: "/node_modules",
        },

        {
          test: /\.svg$/,
          use: ["@svgr/webpack"],
        },
      ],
    },
    plugins,
  };
};

const clientEntry = path.resolve(__dirname, "src", "client", "index.tsx");
const clientPath = path.resolve(__dirname, "dist");
const clientConfig = Config(clientEntry, "client", "web", clientPath, [
  new webpack.DefinePlugin({
    "process.env.BROWSER": JSON.stringify(true),
  }),
]);

const serverEntry = path.resolve(__dirname, "server.ts");
const serverPath = path.resolve(__dirname, "dist");
const serverConfig = Config(serverEntry, "server", "node", serverPath, []);

/**
 * First drawback, we need to transpile our server code when we could
 * have kept it as standard JavaScript.
 */
module.exports = [serverConfig, clientConfig];
