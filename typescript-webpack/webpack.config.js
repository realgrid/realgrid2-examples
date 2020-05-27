const path = require('path')

module.exports = {
  mode: 'development',
  entry: './src/index.ts',
  output: {
    filename: 'example.js',
    path: path.join(__dirname, 'dist'),
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  module: {
    rules: [
        {
            test: /\.ts/,
            exclude: /(node_modules)/,
            use: {
              loader: "ts-loader"
            }
        }
    ]
  },
  devServer: {
    port: 9001,
    hot: true,
    publicPath: "/dist/"
  },
};

