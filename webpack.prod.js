const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webpackMerge = require('webpack-merge');
const BaseConfig = require("./webpack.base");

let config = webpackMerge({},
    BaseConfig, {
        mode: 'production',
        externals: {
            'react': 'react',
            'react-dom': 'react-dom'
        },
        optimization: {
            splitChunks: {
                cacheGroups: {
                    commons: {
                        name: 'commons', // 提取出来的文件命名
                        // name： ‘common/common’ //  即先生成common文件夹
                        chunks: 'initial', // initial表示提取入口文件的公共css及js部分
                        // chunks: 'all' // 提取所有文件的公共部分
                        test: '/\.css$/', // 只提取公共css ，命名可改styles 
                        minChunks: 0, // 表示提取公共部分最少的文件数
                        minSize: 0 // 表示提取公共部分最小的大小 
                            // 如果发现页面中未引用公共文件，加上enforce: true
                    },
                    vendors: {
                        name: 'vendors', // 提取出来的文件命名
                        // name： ‘common/common’ //  即先生成common文件夹
                        chunks: 'initial', // initial表示提取入口文件的公共css及js部分
                        chunks: 'all', // 提取所有文件的公共部分
                        test: '/(react|react-dom)/', // 只提取公共css ，命名可改styles 
                        minChunks: 1, // 表示提取公共部分最少的文件数
                        minSize: 0 // 表示提取公共部分最小的大小 
                            // 如果发现页面中未引用公共文件，加上enforce: true
                    },
                    tools: {
                        name: 'tools', // 提取出来的文件命名
                        // name： ‘common/common’ //  即先生成common文件夹
                        chunks: 'initial', // initial表示提取入口文件的公共css及js部分
                        chunks: 'all', // 提取所有文件的公共部分
                        test: '/\.js$/', // 只提取公共css ，命名可改styles 
                        minChunks: 1, // 表示提取公共部分最少的文件数
                        minSize: 0 // 表示提取公共部分最小的大小 
                            // 如果发现页面中未引用公共文件，加上enforce: true
                    }
                }
            }
        },
        plugins: [new CleanWebpackPlugin()]
    })
module.exports = config
