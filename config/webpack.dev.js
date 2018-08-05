const Merge = require('webpack-merge');
const baseConfig = require('./webpack.base.js');
const config = require('./dev.json');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = Merge(baseConfig, {
    mode: 'development',
    devtool: 'source-map',
    devServer: {
        port: config.port,
        host: config.host,
        open: 'http://localhost:8080'
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: 'index.html'
        })
    ]
});