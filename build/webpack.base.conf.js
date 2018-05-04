'use strict'
const path = require('path')
const utils = require('./util')

function resolve(dir) {
    return path.join(__dirname, '..', dir)
}

module.exports = {
    entry: {
        app: './src/main.js'
    },
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: '[name].js'
    },
    resolve: {
        extensions: ['.js', '.jsx', '.scss', '.css', '.json'],
        alias: {
            '@': resolve('src'),
        }
    },
    plugins: [
        utils.HappyPack('Babel', ['babel-loader']),
        utils.HappyPack('Sass', ['css-loader', 'sass-loader']),
        utils.HappyPack('Md', ['raw-loader'])
    ],
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['happypack/loader?id=Babel']
            },
            {
                test: /\.(css|scss)$/,
                exclude: /node_modules/,
                use: ['style-loader', 'happypack/loader?id=Sass']
            },
            {
                test: /\.md$/,
                exclude: /node_modules/,
                use: ['happypack/loader?id=Md']
            }
        ]
    }

}
