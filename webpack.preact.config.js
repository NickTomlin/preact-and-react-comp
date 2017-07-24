const reactConfig = require('./webpack.react.config.js')

module.exports = Object.assign({}, reactConfig, {
  entry: {
    preact: './preact.js',
  },
  resolve: {
    alias: {
      react: "preact-compat",
      "react-dom": "preact-compat"
    }
  }
})
