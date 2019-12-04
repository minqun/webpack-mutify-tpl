const path = require("path");
const dirOutput = path.resolve(__dirname, "dist");
const babelCommonConfig = require("./babel/babelCommonConfig");
const babelConfig = babelCommonConfig(false);
babelConfig.plugins.push(require.resolve("babel-plugin-syntax-dynamic-import"));
module.exports = {
    entry: {
        'pubsdk': './src/jsPub/index.js',
    },
    mode: 'production',
    module: {
        rules: [{
            test: /\.js$/,
            loader: "babel-loader",
            exclude: /node_modules/,
            options: babelConfig,
        }, ],
    },
    output: {
        path: dirOutput,
        filename: 'pubsdk.js',
        library: 'pubsdk',
        libraryTarget: 'umd',
        libraryExport: 'default'
    }

}