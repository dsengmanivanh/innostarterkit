const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const glob = require("glob");
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');

module.exports = {
    entry: {
        index: './src/js/index.js',
        particle:glob.sync('./src/js/particle/*.js')
    },
    output: {
        filename: 'js/[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new ExtractTextPlugin({
          filename: 'css/[name].css',
          allChunks: true
        }),
        new HtmlWebpackPlugin({
          filename: 'index.html',
          template: './src/index.html',
          chunks: ['index','particle']
        }),
        new BrowserSyncPlugin({
            // browse to http://localhost:3000/ during development,
            // ./public directory is being served
            host: 'localhost',
            port: 3000,
            // proxy the Webpack Dev Server endpoint
            // (which should be serving on http://localhost:3100/)
            // through BrowserSync
            proxy: 'http://localhost:8080/'
        })
    ],
    module: {
        rules: [
         {
           test: /\.scss$/,
           use: ExtractTextPlugin.extract({
             fallback: 'style-loader',
             use: ['css-loader', 'sass-loader']
           })
         },
         {
            test: /\.js$/,
            exclude: /(node_modules)/,
            use: {
              loader: 'babel-loader',
              options: {
                babelrc: false,
                presets: ['@babel/preset-env','@babel/preset-react']
              }
            }
         },
         {
           test: /\.(png|jpg|gif)$/,
           use: [
             {
               loader: 'file-loader',
               options: {
                 name:'media/[name].[ext]'
               }
             }
           ]
         }
        ]
    },
    watch: true,
    watchOptions: {
        ignored: /node_modules/
    },
    mode: 'none'
};
