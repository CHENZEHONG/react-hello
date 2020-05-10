const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const {CleanWebpackPlugin} = require("clean-webpack-plugin");

module.exports = {
    mode: "development",
    entry: {
        dev: path.resolve(__dirname, "../src", "App.tsx")
    },
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, "../dist")
    },
    module: {
        rules: [
            {test: /\.tsx?$/, loader: "ts-loader"},
            {test: /\.css$/, use:[{loader: "style-loader"},{loader: "css-loader"}]}
        ]
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx']
    },
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        port: 9002,
        open: true,
        hot: true,
        historyApiFallback: true
    },
    plugins: [
        new CleanWebpackPlugin({
            outputPath: "../dist"
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "../index.html"),
            filename: "index.html",
            inject: true,
            minify: {
                removeComments: true,
                collapseWhitespace: true,
                removeAttributeQuotes: false,
                dropConsole: true
            },
        })
    ]
};
