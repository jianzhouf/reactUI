'use strict'
const path = require('path')
const utils = require('./util')

function resolve(dir) {
    return path.join(__dirname, '..', dir)
}

module.exports = {
    // context: path.resolve(__dirname, '../'),
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
        utils.HappyPack('Sass', ['style-loader', 'css-loader', 'sass-loader'])
    ],
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['happypack/loader?id=Babel']
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                use: ['happypack/loader?id=Sass']
            }
        ]
    }
}
