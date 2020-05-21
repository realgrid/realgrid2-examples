const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/example.js',
  resolve: {
    extensions: ['.js']
  },
  devServer: {
    port: 9000,
  },
  output: {
    filename: 'example.js',
    path: path.join(__dirname, 'dist')
  },
  devtool: 'sourcemap'
};