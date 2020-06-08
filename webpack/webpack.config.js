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
    publicPath: "/dist/"
  },
  output: {
    filename: 'example.js',
    path: path.join(__dirname, 'dist'),
  },
  devtool: 'sourcemap',
};

