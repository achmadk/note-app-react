const webpack = require('webpack'),
path = require('path'),
BrowserSync = require('browser-sync'),
WebpackDevMiddleware = require('webpack-dev-middleware'),
WebpackHotMiddleware = require('webpack-hot-middleware')

var webpackConfig = require('../webpack.config')

webpackConfig.entry.unshift(
  'webpack/hot/dev-server', // Reload only the dev server
  'webpack-hot-middleware/client', // Setting the URL for the hot reload
  'react-hot-loader/patch'
)

webpackConfig.output = {
  path: path.resolve(__dirname, '../temp'),
  publicPath: '',
  filename: 'bundle.js'
}

webpackConfig.devtool = 'source-map'

webpackConfig.plugins.unshift(
  new webpack.HotModuleReplacementPlugin(),
  new webpack.LoaderOptionsPlugin({ debug: true })
)

const bundler = webpack(webpackConfig)

BrowserSync({
  server: {
    baseDir: path.resolve(__dirname, '../temp'),
    middleware: [
      WebpackDevMiddleware(bundler, {
        publicPath: webpackConfig.output.publicPath,
        stats: { colors: true }
      }),
      WebpackHotMiddleware(bundler)
    ]
  },
  port: 8070,
  files: [
    '../client/src/**/*.*',
  ]
})
