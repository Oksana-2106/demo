const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

const p = 7

module.exports = {
  context: path.resolve(__dirname, 'src'),
  mode: 'development',
  entry: {
    main: './index.js'
  },
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, 'dist')
  },
  optimization: {
    splitChunks: {
      chunks: 'all'
    }
  },
  devServer: {
    port: 4200
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: './index.html'
    }),
    new HTMLWebpackPlugin({
      filename: 'tour1.html',
      template: './tours/tour1.html'
    }),
    new HTMLWebpackPlugin({
      filename: 'tour2.html',
      template: './tours/tour2.html'
    }),
    new HTMLWebpackPlugin({
      filename: 'tour3.html',
      template: './tours/tour3.html'
    }),
    new HTMLWebpackPlugin({
      filename: 'tour4.html',
      template: './tours/tour4.html'
    }),
    new HTMLWebpackPlugin({
      filename: 'tour5.html',
      template: './tours/tour5.html'
    }),
    new HTMLWebpackPlugin({
      filename: 'tour6.html',
      template: './tours/tour6.html'
    }),
    new HTMLWebpackPlugin({
      filename: 'tour7.html',
      template: './tours/tour7.html'
    }),
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css'
    }),
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin({
       patterns: [
         {
           from: path.resolve(__dirname, 'src/assets/ico/favicon.ico'),
           to: path.resolve(__dirname, 'dist')
         },
         {
           from: path.resolve(__dirname, 'src/assets/img'),
           to: path.resolve(__dirname, 'dist')
         },
         {
          from: path.resolve(__dirname, 'src/assets/svg/explore-slider.svg'),
          to: path.resolve(__dirname, 'dist')
        },         
         {
          from: path.resolve(__dirname, 'src/assets/video'),
          to: path.resolve(__dirname, 'dist')
         }
       ]
      })
  ],
  module: {
    rules: [      
      {
        test: /\.(png|jpg|jpeg|ico|svg|gif|webp)$/i,
        type: 'asset/resource'
      },
      {
        test: /\.(woff(2)?|ttf|eot|otf)$/i,
        type: 'asset/resource'
      },
      {
        test: /\.(mp3|wav|ogg|mp4)$/i,
        type: 'asset/resource'
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader']
      },
      {
        test: /\.s[ac]ss$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
      }
    ]
  }
}