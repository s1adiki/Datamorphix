const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const webpackDashboard = require('webpack-dashboard/plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');
const DuplicatePackageCheckerPlugin = require("duplicate-package-checker-webpack-plugin");

module.exports = {

    entry:"./src/configurations/index.js",

    output:{
        path:path.join(__dirname,"./dist"),
        filename:"bundle.js"
    },

    module:{
        rules:[
            {test: /\.jsx?$/, exclude: /node_modules/, use: [{ loader: "babel-loader" ,options: {presets: ["env", "react"]}}]},
            {test: /\.scss$/, use: [{ loader:"style-loader"},{ loader:"css-loader", options: {modules: true}},{ loader:"sass-loader", options: {modules: true}}]},
            {test:/\.css$/, use:ExtractTextPlugin.extract("css-loader", "style-loader")},
            {test: /\.(png|jpg|gif|svg)$/, use: [{ loader:"file-loader"}]}
        ]
    },

    plugins:[
        new webpackDashboard(),
        new BundleAnalyzerPlugin(),
        new FriendlyErrorsWebpackPlugin(),
        new DuplicatePackageCheckerPlugin(),
        new HtmlWebpackPlugin({filename:"index.html", template:"./src/assets/index.html"}),
        new ExtractTextPlugin("style.css"),
        new webpack.optimize.UglifyJsPlugin({ mangle: false })
    ]
};