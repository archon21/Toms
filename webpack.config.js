'use-strict';

const path = require('path');
const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');

const Config = (entry, name, target, path, isPostProcess, plugins) => {
  return {
    entry,
    target,
    externals: name === 'server' ? [nodeExternals()] : [],
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
          test: /\.(js|jsx|tsx|ts)$/,
          loader: 'babel-loader',
          exclude: '/node_modules',
        },
      ],
    },
    plugins,
  };
};

const clientEntry = path.resolve(__dirname, 'src', 'client', 'index.tsx');
const clientPath = path.resolve(__dirname, 'dist');
const clientConfig = Config(clientEntry, 'client', 'web', clientPath, [
  new webpack.DefinePlugin({
    'process.env.BROWSER': JSON.stringify(true),
  }),
]);

const serverEntry = path.resolve(__dirname, 'server.ts');
const serverPath =  path.resolve(__dirname, 'dist');
const serverConfig = Config(serverEntry, 'server', 'node', serverPath, []);

/**
 * First drawback, we need to transpile our server code when we could
 * have kept it as standard JavaScript.
 */
module.exports = [serverConfig, clientConfig];
