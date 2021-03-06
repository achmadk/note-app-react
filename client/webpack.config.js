const webpack = require('webpack'),
CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: [ './src/index.jsx' ],
  module: {
    loaders: [{
      /**
       * use babel-loader to load .jsx files
       * react-hot-loader has been added in package.json file since version 3
       */
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'babel'
    }, {
      /**
       * use less-loader, css-loader, and style-loader to load .less files
       * you can import .less in .jsx file
       */
      test: /\.less$/,
      loader: 'style!css!less'
    }, {
      /**
       * use sass-loader, css-loader, and style-loader to load .scss files
       * you can import .scss in .jsx file
       */
      test: /\.scss$/,
      loader: 'style!css!sass'
    }, {
      /**
       * css-loader, and style-loader to load .css files
       * you can import .css in .jsx file
       */
      test: /\.css$/,
      loader: 'style!css'
    }, {
      /**
       * compress images with specific extensions with image-webpack-loader,
       * then move it into img folder with name [hash].[ext] using url-loader
       */
      test: /.*\.(png|jpg|svg)$/i,
      loader: 'url?name=./img/[hash].[ext]!image-webpack',
    }, {
      /**
       * load fonts with specific extensions,
       * then move it into font folder with name [hash].[ext] using file-loader.
       * added (\?[\s\S]+) regex value in case you want to load font-awesome or ionicons font
       */
      test:  /\.(ttf|eot|svg)(\?[\s\S]+)?$/,
      loader: 'file?name=./font/[hash].[ext]'
    }, {
      /**
       * load fonts with woff/woff2 extensions with url-loader.
       * then move it into font folder with name [hash].[ext] and other options using url-loader.
       * added (\?[\s\S]+) regex value in case you want to load font-awesome or ionicons font
       */
      test: /\.woff(2)?(\?[\s\S]+)?$/,
      loader: 'url-loader?limit=10000&mimetype=application/font-woff&name=./font/[hash].[ext]'
    }]
  },
  resolve: {
    /**
     * According to https://github.com/webpack/webpack.js.org/issues/68
     * in webpack 2 root and modulesDirectories in resolver has deleted
     * in order to use it, add root value to modules list
     */
    modules: [__dirname, 'node_modules', 'src', 'test'],
    extensions: ['.js', '.jsx'],
    alias: {
      root: 'src',
      actions: 'src/actions',
      api: 'src/api',
      assets: 'src/assets',
      components: 'src/components',
      modules: 'src/modules',
      reducers: 'src/reducers'
    }
  },
  plugins: [
    new webpack.NoErrorsPlugin(),
    new CopyWebpackPlugin([
      { from: './src/pages'},
      { from: './src/assets/img', to: 'img' }
    ])
  ]
};
