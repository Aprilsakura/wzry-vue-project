var htmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');

module.exports = {
    entry: [
        "./src/js/app.js"
    ],
    output: {
        path: path.resolve(__dirname, "./dist"),
        filename: "build.js"
    },
    plugins: [new htmlWebpackPlugin({
        title: 'index',
        filename: 'index.html',
        template: './src/index.html'
    })],
    module: {
        loaders: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.less$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'less-loader'
                ]
            },
            {
                test: /\.(jpg|png|ttf|gif)$/,
                use: [
                    { loader: 'url-loader', options: { limit: 8192 } },
                    'image-webpack-loader'
                ]
            },
            {
                test: /\.vue$/,
                exclude: /node_modules/,
                use: 'vue-loader'
            }
        ]
    }
}