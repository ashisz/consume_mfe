const path = require('path');
const { merge } = require('webpack-merge');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const commonConfig = require('./webpack.common');
const deps = require('./package.json').dependencies;

const devConfig = {
  mode: 'development',
  devServer: {
    port: 8082,
    historyApiFallback: {
      index: 'index.html',
    },
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'consume-mfe',
      remotes: {
        // 'mfe-remote': `mfe@${path.join('node_modules', 'mfe', 'dist', 'remoteEntry.js')}`,
        'mfe-remote': `mfe@http://localhost:8081/remoteEntry.js`,
      },
      shared: deps,
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html"
    })
  ]
};

module.exports = merge(commonConfig, devConfig);