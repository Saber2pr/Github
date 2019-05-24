/*
 * @Author: saber2pr
 * @Date: 2019-05-22 20:20:01
 * @Last Modified by: saber2pr
 * @Last Modified time: 2019-05-24 20:56:50
 */
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const CleanCSSPlugin = require('less-plugin-clean-css')
const path = require('path')

const extractLess = new ExtractTextPlugin('style.css')

const templateContent = '<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><meta http-equiv="X-UA-Compatible" content="ie=edge"><title>Github</title></head><body></body></html>'

const {
  WebpackConfig
} = require('@saber2pr/webpack-configer')

module.exports = WebpackConfig({
  mode: 'production',
  entry: './src/index.tsx',
  resolve: {
    extensions: ['.js', '.ts', '.tsx']
  },
  output: {
    filename: 'bundle.js',
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