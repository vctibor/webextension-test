const path = require('path');
const CopyPlugin = require("copy-webpack-plugin");
const BackgroundLogger = require('webpack-webextension-background-logger')

module.exports = {
    mode: 'development',
    entry: {
        background: './src/background.ts',
        popup: './src/popup.ts',
        'content-script': './src/content-script.ts',
    },
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
    plugins: [
        new CopyPlugin({
            patterns: [
                { from: "static/manifest.json", to: "manifest.json" },
                { from: "static/*", to: "." }
            ],
        }),
        new BackgroundLogger()
    ],
};
