const path = require('path');
let HtmlWebpackPlugin = require('html-webpack-plugin');
 
const config = {
 entry: './src/index.js',
 devtool: (process.env.NODE_ENV === 'production') ? false : 'inline-source-map',
 mode: (process.env.NODE_ENV === 'production') ? 'production' : 'development',
 output: {
   path: path.resolve(__dirname, '../dist'),
   filename: 'app.bundle.js'
 },
 plugins: [new HtmlWebpackPlugin({template:'./index.html'})],
 module: {
   rules: [
     {
       test: /\.js$/,
       exclude: /(node_modules)/,
       use: {
         loader: 'babel-loader'
       }
     },
    {
      test: /\.(svg|png|jpg\gif)$/,
      use: {
        loader: "file-loader",
        options: {
          name: "[name].[ext]"
        },
      },
    }
   ]
 },
};
 
module.exports = config;
