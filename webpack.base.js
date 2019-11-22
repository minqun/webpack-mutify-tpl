const path = require("path");
const webpackMerge = require("webpack-merge");
const babelCommonConfig = require("./babel/babelCommonConfig");
const babelConfig = babelCommonConfig(false);
const WebpackBar = require("webpackbar");
const dirOutput = path.resolve(__dirname, "dist");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const config = require("./page.config.js");
console.log(config);
babelConfig.plugins.push(require.resolve("babel-plugin-syntax-dynamic-import"));
const createFiles = () => {
  const path = require("path");
  const glob = require("glob");
  const result = [];
  const files = glob.sync(path.join(__dirname, "./src/views/pages/*.html"));
  let obj = {};
  for (file of files) {
    let name = file.match(/\w{0,}(?=\.html)/)[0];
    let template = `./src/views/pages/${name}.html`;
    let chunks =
      process.env.NODE_ENV == "development"
        ? [name]
        : [name, "verndor", "commons"];

    result.push(
      new HtmlWebpackPlugin({
        template: template,
        filename: `${name}/index.html`,
        inject: true,
        minify: false,
        chunks: chunks,
      })
    );
    obj[name] = `./src/views/runnings/${name}`;
  }
  return { htmlPlugins: result, mainEntries: obj };
};
const createPage = () => {
  let template = `./src/views/pages/${config.page}.html`;
  let chunks =
    process.env.NODE_ENV == "development"
      ? [config.page]
      : [config.page, "verndor", "commons"];
  let page = new HtmlWebpackPlugin({
    template: template,
    filename: `${config.page}/index.html`,
    inject: true,
    minify: false,
    chunks: chunks,
  });
  let mainEntries = {};
  mainEntries[config.page] = `./src/views/runnings/${config.page}`;
  return {
    page,
    mainEntries,
  };
};

let HtmlPlugins = config.mutify
  ? createFiles().htmlPlugins
  : [createPage().page];
let mainEntries = config.mutify
  ? createFiles().mainEntries
  : createPage().mainEntries;
console.log(mainEntries, "mainEntries");
module.exports = {
  mode: "development",
  entry: mainEntries,
  output: {
    filename: "[name]/[name].[hash].js",
    path: dirOutput,
    publicPath: "/",
  },
  module: {
    rules: [
      {
        test: /\.less$/,
        use: [
          process.env.NODE_ENV === "development"
            ? "style-loader"
            : MiniCssExtractPlugin.loader,
          "css-loader",
          "less-loader",
        ],
      },
      {
        test: /\.(js|jsx)$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        options: babelConfig,
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: "file-loader",
        options: {
          name: "[path][name].[ext]?[hash]",
        },
      },
      {
        test: /\.(htm|html)$/i,
        use: ["html-withimg-loader"],
      },
    ],
  },
  resolve: {
    modules: ["node_modules", path.join(__dirname, "./node_modules")],
    extensions: [".js", ".jsx", ".vue", ".less"],
    alias: {
      "@public": path.join(__dirname, "./src/public"),
      "@source": path.join(__dirname, "./src/sources"),
      "@views": path.join(__dirname, "./src/views"),
      "@": path.join(__dirname, "./src"),
    },
  },
  plugins: [
    new WebpackBar(),
    ...HtmlPlugins,
    new MiniCssExtractPlugin({
      filename: "[name]/[name].[hash].css",
      // publicPath: path.resolve(__dirname, '/dist'),
      chunkFilename: "[name]/[id].[hash].css",
    }),
  ],
};
