const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/example.js',
  resolve: {
    extensions: ['.js'],
  },
  devServer: {
    port: 9000,
    hot: true,
  },
  output: {
    filename: 'example.js',
    publicPath: path.join(__dirname, 'dist'),
  },
  devtool: 'sourcemap',
};