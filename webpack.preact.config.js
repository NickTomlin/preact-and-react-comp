const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const reactConfig = require('./webpack.react.config.js')

module.exports = Object.assign({}, reactConfig, {
  entry: {
    preact: './preact.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env', 'es2017', 'preact'],
            plugins: [['transform-react-jsx', { pragma: 'h' }]]
          }
        }
      }
    ]
  }
})
