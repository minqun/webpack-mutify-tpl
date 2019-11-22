const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const webpackMerge = require('webpack-merge')
const BaseConfig = require('./webpack.base')

let config = webpackMerge({}, BaseConfig, {
  mode: 'production',
  //   externals: {
  //     react: 'react',
  //     'react-dom': 'react-dom'
  //   },
  // optimization: {
  //   splitChunks: {
  //     //   chunks: 'all', // 提取所有文件的公共部分
  //     minChunks: 1, // 表示提取公共部分最少的文件数
  //     minSize: 0, // 表示提取公共部分最小的大小
  //     cacheGroups: {
  //       // commons: {
  //       //   name: 'commons', // 提取出来的文件命名
  //       //   // name： ‘common/common’ //  即先生成common文件夹
  //       //   chunks: 'initial', // initial表示提取入口文件的公共css及js部分
  //       //   test: '/.css$/', // 只提取公共css ，命名可改styles
  //       //   priority: 20,
  //       //   minChunks: 1, // 表示提取公共部分最少的文件数
  //       //   minSize: 0 // 表示提取公共部分最小的大
  //       // },
  //       // libs: {
  //       //   name: 'verndor',
  //       //   test: /([\\/]node_modules[\\/]_?react(.*))||([\\/]node_modules[\\/]_?react-dom(.*))/
  //       //   //   priority: 10
  //       // }
  //       // vendors: {
  //       //   filename: 'vendors', // 提取出来的文件命名
  //       //   test: '/(react|react-dom)/', // 只提取公共css ，命名可改styles
  //       //   reuseExistingChunk: true
  //       // }
  //       // tools: {
  //       //   filename: 'tools', // 提取出来的文件命名
  //       //   // name： ‘common/common’ //  即先生成common文件夹
  //       //   test: '/.js$/' // 只提取公共css ，命名可改styles
  //       // }
  //     }
  //   }
  // },
  plugins: [new CleanWebpackPlugin()]
})
module.exports = config
