const reactConfig = {
    context: __dirname,
    entry: './main.js',
    output: {
        path: __dirname + '/dist',
        filename: 'bundle.js'
    },
    devServer: {
        port: 8081,
        historyApiFallback: {
            index: 'index.html'
        }
    },
    'watch': true,
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            }
        ]
    }
};

const CopyWebpackPlugin = require('copy-webpack-plugin');
const copyConfig = {
    context: __dirname,
    entry: '../../favicon.ico',
    output: {
        path: __dirname + '/dist',
        filename: 'favicon.ico'
    },
    module: {
        rules: [
            {
                test: /\.(css|ico)(\?|$)/,
                use: 'url-loader?limit=100000'
            }
        ]
    },
    plugins: [
        new CopyWebpackPlugin([
            { from: '../../content/scss' }
        ],
            {
                ignore: [
                    '*.scss'
                ],

                copyUnmodified: true
            })
    ]
};

/*
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const cssConfig = {
    context: __dirname,
    entry: './scss/main.scss',
    output: {
        path: __dirname + '/dist',
        filename: 'ignore.css'
    },
    'watch': true,
    module: {
        rules: [
            {
                test: [/\.scss$/],
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader'
                ]
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'main.min.css'
        })
    ]
};
*/

module.exports = [reactConfig, copyConfig];