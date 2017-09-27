const webpack = require('webpack'),
CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: [ './client/src/index.jsx' ],
  module: {
    rules: [{
      /**
       * use babel-loader to load .jsx files
       * react-hot-loader has been added in package.json file since version 3
       */
      test: /\.jsx?$/,
      exclude: /node_modules/,
      use: [{ loader: 'babel-loader', query: { cacheDirectory: true } }]
    }, {
      /**
       * use less-loader, css-loader, and style-loader to load .less files
       * you can import .less in .jsx file
       */
      test: /\.less$/,
      use: [
        'style-loader',
        { loader: 'css-loader?importLoaders=1' },
        'less-loader'
      ]
    }, {
      /**
       * use sass-loader, css-loader, and style-loader to load .scss files
       * you can import .scss in .jsx file
       */
      test: /\.scss$/,
      loader: [
        'style-loader',
        'css-loader',
        'sass-loader'
      ]
    }, {
      /**
       * css-loader, and style-loader to load .css files
       * you can import .css in .jsx file
       */
      test: /\.css$/,
      loader: [
        'style-loader',
        'css-loader'
      ]
    }, {
      /**
       * compress images with specific extensions with image-webpack-loader,
       * then move it into img folder with name [hash].[ext] using url-loader
       */
      test: /.*\.(png|jpg|svg)$/i,
      use: [{
        loader: 'url-loader',
        options: { name: 'img/[hash].[ext]' }
       }, {
         loader: 'image-webpack-loader',
         options: { bypassOnDebug: true }
       }]
    }, {
      /**
       * load fonts with specific extensions,
       * then move it into font folder with name [hash].[ext] using file-loader.
       * added (\?[\s\S]+) regex value in case you want to load font-awesome or ionicons font
       */
      test:  /\.(ttf|eot|svg)(\?[\s\S]+)?$/,
      use: [{
        loader: 'file-loader',
        options: { name: 'font/[hash].[ext]' }
      }]
    }, {
      /**
       * load fonts with woff/woff2 extensions with url-loader.
       * then move it into font folder with name [hash].[ext] and other options using url-loader.
       * added (\?[\s\S]+) regex value in case you want to load font-awesome or ionicons font
       */
      test: /\.woff(2)?(\?[\s\S]+)?$/,
      use: [{
        loader: 'url-loader',
        options: { limit: 10000, mimetype: 'application/font-woff', name: 'font/[hash].[ext]' }
      }]
    }]
  },
  resolve: {
    /**
     * According to https://github.com/webpack/webpack.js.org/issues/68
     * in webpack 2 root and modulesDirectories in resolver has deleted
     * in order to use it, add root value to modules list
     */
    // modulesDirectories: ['node_modules', 'client'],
    modules: [__dirname, 'node_modules', 'client'],
    // extensions: ['', '.js', '.jsx'],
    extensions: ['.js', '.jsx'],
    // root: __dirname,
    alias: {
      root: 'client/src',
      actions: 'client/src/actions',
      api: 'client/src/api',
      assets: 'client/src/assets',
      components: 'client/src/components',
      modules: 'client/src/modules',
      reducers: 'client/src/reducers',
      selectors: 'client/src/selectors'
    }
  },
  plugins: [
    new webpack.NamedModulesPlugin(),
    new CopyWebpackPlugin([
      { from: './client/src/pages'}
    ])
  ]
};
