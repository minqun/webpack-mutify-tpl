const path = require('path');

const webpackMerge = require('webpack-merge');
const BaseConfig = require("./webpack.base");

let config = webpackMerge({},

    BaseConfig, {
        devtool: 'inline-source-map',
        devServer: {
            host: '192.168.8.142',
            port: 8080,
            contentBase: path.join(__dirname, "dist"),
        },

    })
module.exports = config