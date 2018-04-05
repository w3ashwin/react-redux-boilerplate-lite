const merge = require('webpack-merge');
const webpackConfig = require('./webpack.config');
const webpack = require('webpack');
const path = require('path');

module.exports = merge(webpackConfig, {
  devtool: 'eval-source-map',
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    host: '0.0.0.0',
    port: parseInt(`${process.env.DEV_PORT}`, 10) || 8081,
    hot: true,
    watchContentBase: false,
    historyApiFallback: true,
    // stats: 'errors-only',
    open: true,
    openPage: '',
    // Do something before app loads on a route
    /* before(app) {
            app.get('/', function (req, res) {
                console.log('Before route..');
                res.json({'a': 'a'})
            });
        }, */
    // Do something before app loads on a route
    /* after(app) {
            app.get('/', function (req, res) {
                console.log('After app ...');
                res.json({ 'b': 'b' })
            });
        } */
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],

});
