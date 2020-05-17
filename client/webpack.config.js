const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const isDevelopment = process.env.NODE_ENV !== 'production';

module.exports = {
    mode: isDevelopment ? 'development' : 'production',
    devtool: isDevelopment ? 'inline-source-map' : 'source-map',
    entry: {
        app: [
            '@babel/polyfill',
            './src/index.js',
            './public/layouts/reset.css',
            './public/layouts/style.css'
        ],
    },
    resolve: {
        alias: {
            'atoms': path.resolve(__dirname, './src/components/atoms'),
            'molecules': path.resolve(__dirname, './src/components/molecules'),
            'organisms': path.resolve(__dirname, './src/components/organisms'),
            'core': path.resolve(__dirname, './src/core'),
            'store': path.resolve(__dirname, './src/store'),
            'utils': path.resolve(__dirname, './src/utils'),
            'mock': path.resolve(__dirname, './src/mock'),
            'images': path.resolve(__dirname, './public/layouts/assets/images'),
        },
        extensions: ['*', '.js', '.jsx'],
    },
    output: {
        filename: '[name].js',
        chunkFilename: '[id]-[chunkhash].js',
        publicPath: '/',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [{
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
                presets: [
                    '@babel/preset-react',
                    '@babel/preset-env',
                ],
                plugins: ['transform-class-properties']
            },
        },
        {
            test: /\.html$/i,
            loader: "html-loader",
        },
        {
            test: /\.css?$/,
            use: [
                MiniCssExtractPlugin.loader,
                "css-loader"
            ]
        },
        {
            test: /\.scss?$/,
            use: [
                'style-loader',
                MiniCssExtractPlugin.loader,
                {
                    loader: 'css-loader',
                    options: isDevelopment ? { sourceMap: true } : {},
                }, {
                    loader: 'sass-loader',
                    options: isDevelopment ? { sourceMap: true } : {},
                }
            ]
        },
        {
            test: /\.(png|jpe?g|gif)$/i,
            loader: 'file-loader',
            options: {
                outputPath: 'images',
                publicPath: 'images',
            },
        },]
    },
    devServer: {
        port: 9000,
        open: true,
        openPage: 'search',
        historyApiFallback: true,
    },
    plugins: [
        new CleanWebpackPlugin({
            dry: isDevelopment,
        }),
        new MiniCssExtractPlugin({
            filename: 'style.css',
        }),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'public/index.html'
        }),
    ],
};
