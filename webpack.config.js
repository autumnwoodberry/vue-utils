const path = require('path');

module.exports = {
  entry: './docs/index.js',
  output: {
    path: path.resolve(__dirname, 'docs/dist'),
    filename: 'main.js'
  },
  devServer: {
    contentBase: path.join(__dirname, '/docs'),
    stats: 'errors-only',
    publicPath: '/dist/',
    watchContentBase: true
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: 'vue-loader'
      }
    ]
  }
}