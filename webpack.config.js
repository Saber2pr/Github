/*
 * @Author: saber2pr
 * @Date: 2019-05-22 20:20:01
 * @Last Modified by: saber2pr
 * @Last Modified time: 2019-05-25 17:12:16
 */
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const CleanCSSPlugin = require('less-plugin-clean-css')
const path = require('path')

const extractLess = new ExtractTextPlugin('style-[hash].css')

const {
  WebpackConfig,
  templateContent
} = require('@saber2pr/webpack-configer')

module.exports = WebpackConfig({
  mode: 'development',
  entry: './src/index.tsx',
  resolve: {
    extensions: ['.js', '.ts', '.tsx']
  },
  output: {
    filename: 'bundle-[hash].js',
    path: path.join(__dirname, 'build')
  },
  module: {
    rules: [{
        test: /\.(ts|tsx)$/,
        use: ['ts-loader']
      },
      {
        test: /\.less$/,
        use: extractLess.extract({
          use: [{
              loader: 'css-loader'
            },
            {
              loader: 'less-loader',
              options: {
                plugins: [
                  new CleanCSSPlugin({
                    advanced: true
                  })
                ]
              }
            }
          ],
          fallback: 'style-loader'
        })
      }
    ]
  },
  plugins: [new HtmlWebpackPlugin({
    templateContent
  }), extractLess]
})