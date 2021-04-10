const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
module.exports = {
    mode: "development",
    entry: {
        app: [
            "@babel/polyfill",
            '@babel/core',
            './src/app/main.js'
        ]
    },
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'js/app.js'
    },
    devServer: {
        port: 3090
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                core: 'babel/core'
            },
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader'
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            minify: {
                collapseBooleanAttributes: true,
                collapseWhitespace: true,
                removeAttributeQuotes: true,
                removeComments: true,
                minifyJS: true,
            }
        }),
        new MiniCssExtractPlugin(
            {
                filename: "css/style.css"
            }
        )
    ]
}