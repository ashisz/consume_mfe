const { merge } = require('webpack-merge');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

const commonConfig = require('./webpack.common');
const deps = require('./package.json').dependencies;

const prodConfig = {
  mode: 'production',
  output: {
    filename: '[name].[contenthash].js',
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'mfe',
      filename: 'remoteEntry.js',
      exposes: {
        './index.js': './src/bootstrap.js',
      },
      shared: deps,
    }),
  ],
};

module.exports = merge(commonConfig, prodConfig);