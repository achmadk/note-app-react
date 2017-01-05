const webpack = require('webpack'),
path = require('path'),
CleanWebpackPlugin = require('clean-webpack-plugin')

var webpackConfig = require('../webpack.config')

webpackConfig.output = {
  path: path.resolve(__dirname, '../www'),
  publicPath: '',
  filename: 'bundle.js',
  chunkFilename: './js/[name].js'
}

webpackConfig.devtool = 'cheap-module-source-map'

webpackConfig.plugins.push(
  new CleanWebpackPlugin([path.resolve(__dirname, '../www')], {
    root: path.resolve(__dirname, '..'),
    verbose: true
  }),
  /**
   * According to https://gist.github.com/sokra/27b24881210b56bbaff7#occurrence-order
   * The plugin is no longer needed and occurrence order is on by default.
   */
  // new webpack.optimize.OccurenceOrderPlugin(),
  new webpack.optimize.DedupePlugin(),
  new webpack.LoaderOptionsPlugin({ debug: false })
  new webpack.DefinePlugin({
    'process.env': {
      'NODE_ENV': JSON.stringify('production')
    },
    '__DEVTOOLS__': false
  }),
  new webpack.IgnorePlugin(/^\.\/locale$/, [/moment$/]),
  // new webpack.IgnorePlugin(/^\.\/languages$/, [/numbro$/]),
  // new webpack.ContextReplacementPlugin(/numbro[\\\/]dist[\\\/]languages$/, /^\.\/en-GB$/),
  /**
   * According to https://gist.github.com/sokra/27b24881210b56bbaff7#loader-options--minimize
   * The UglifyJsPlugin no longer puts loaders into minimize mode.
   * The debug option has been removed.
   * Loaders should no longer read their options from the webpack configuration.
   * Instead you need to provide these options with the LoaderOptionsPlugin.
   */
  new webpack.optimize.UglifyJsPlugin({
    sourceMap: true,
    compress: {
      // warnings: false,
      drop_console: true,
      dead_code: true,
      unused: true,
      booleans: true,
      if_return: true
    },
    mangle: false
  })
  // new webpack.LoaderOptionsPlugin({
  //   minimize: true,
  //   debug: false
  // })
)

module.exports = webpackConfig
