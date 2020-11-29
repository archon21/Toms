'use-strict';

const path = require('path');
const nodeExternals = require('webpack-node-externals');

const Config = (entry, name, target, path) => {
  return {
    entry,
    target,
    externals: [nodeExternals()],
    output: {
      path,
      filename: `bundle.${name}.js`,
    },
    mode: 'development',
    resolve: {
      extensions: ['.ts', '.tsx', '.js'],
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: 'ts-loader',
        },
      ],
    },
  };
};

const clientEntry = path.resolve(__dirname, 'src', 'client', 'index.tsx');
const clientPath = path.resolve(__dirname, 'dist');
const clientConfig = Config(clientEntry, 'client', 'web', clientPath);

const serverEntry = path.resolve(__dirname, 'server.ts');
const serverPath = __dirname;
const serverConfig = Config(serverEntry, 'server', 'node', serverPath);

/**
 * First drawback, we need to transpile our server code when we could
 * have kept it as standard JavaScript.
 */
module.exports = [serverConfig, clientConfig];
