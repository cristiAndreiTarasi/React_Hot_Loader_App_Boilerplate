
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ErrorOverlayPlugin = require("error-overlay-webpack-plugin");
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const webpack = require('webpack');
const path = require('path');

module.exports = {
    entry: ["@babel/polyfill", "./src/index.js"],
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'index_bundle.js'
    },

    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            '@babel/preset-env',
                            '@babel/preset-react',
                        ]
                    }
                }
            },
            {
                test: /\.html$/,
                use: [{ loader: 'html-loader' }]
            },
            {
                test: /\.(css|scss)$/,
                use: [
                    'style-loader', 
                    'css-loader', 
                    'sass-loader'
                ]
            },
            {
                test: /\.(jpg|png|gif|svg|pdf|ico)$/,
                use: [
                    {
                        loader: 'image-webpack-loader',
                        options: {
                            bypassOnDebug: true, // webpack@1.x
                            disable: true, // webpack@2.x and newer
                        },
                    },
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 25000
                        }
                    },
                    // { loader: 'svg-inline-loader' }
                ]
            }
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',
            filename: './index.html'
        }),
        
        new ErrorOverlayPlugin(),
        
        new BrowserSyncPlugin({
            host: 'localhost',
            port: 3000,
            proxy: 'http://localhost:8080/',
        },{ reload: false }),
        
        new webpack.HotModuleReplacementPlugin(),
    ],

    devServer: { 
        stats: {
            builtAt: false,
            children: false,
            modules: false,
            colors: true,
            progress: true,
        },
        // open: true, // BrowserSync opens the browser tab
        overlay: true,
        hotOnly: true,
        historyApiFallback: true,
   }
}
