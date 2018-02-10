const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

var config = {
    entry: [
        path.resolve(__dirname,'src/main.js')
    ],
    output: {
       path: path.resolve(__dirname,'src'),
       publicPath: '/',
       filename: 'index.js',
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "src/index.html",
            inject: true
        })
    ],
    module: {
       loaders: [
          {
             test: /\.jsx?$/,
             exclude: /node_modules/,
             loaders: ['babel-loader'],
          },
          {test: /\.css$/, loaders: ["style-loader","css-loader"]}
       ]
    }
 }
 module.exports = config;