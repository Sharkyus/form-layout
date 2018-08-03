const path = require('path');

module.exports = {
    context: path.join(process.cwd(), 'src'),
    entry: [
        './index.js'
    ],
    output: {
        path: path.join(process.cwd(), 'dist'),
        filename: '[name].[hash].js',
        publicPath: '/',
        sourceMapFilename: '[name].map'
    },
    resolve: {
        extensions: ['.js','.scss','.html'],
        modules: [ 'config', 'node_modules' ],
    },
    module: {
        rules: [
            {
                test: /\.scss/,
                use: [{
                    loader: 'style-loader' // creates style nodes from JS strings
                }, {
                    loader: 'css-loader' // translates CSS into CommonJS
                }, {
                    loader: 'sass-loader' // compiles Less to CSS
                }]
            }
        ],
    }
};