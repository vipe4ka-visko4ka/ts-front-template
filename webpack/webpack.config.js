const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const rootFolder = (...paths) => path.join(__dirname, '..', ...paths);
const srcFolder = (...paths) => rootFolder('./src', ...paths);

const config = {
  entry: srcFolder('index.ts'),
  output: {
    path: rootFolder('build'),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.js', '.ts']
  },
  plugins: [new HtmlWebpackPlugin()],
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        use: 'ts-loader'
      }
    ]
  }
};

module.exports = config;
