'use strict'
const utils = require('./utils')
module.exports = {
  loaders: {
    scss: 'vue-style-loader!css-loader!sass-loader', // 用于加载 .scss 文件
    sass: 'vue-style-loader!css-loader!sass-loader?indentedSyntax', // 用于加载 .sass 文件
    js: 'babel-loader' // 用于加载 .js 文件
  },
}
