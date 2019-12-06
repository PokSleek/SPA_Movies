const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const isDevelopment = process.env.NODE_ENV !== 'production';

module.exports = {
    mode: isDevelopment ? 'development' : 'production',
    devtool: isDevelopment ? 'inline-source-map' : 'source-map',
    entry: {
        app: [
            '@babel/polyfill',
            './layouts/index.js',
        ],
    },
    resolve: {
        extensions: ['*', '.js', '.jsx']
    },
    output: {
        filename: '[name].js',
        chunkFilename: '[id]-[chunkhash].js',
        publicPath: 'dist/',
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
        }, {
            test: /\.css?$/,
            use: [
                MiniCssExtractPlugin.loader,
                "css-loader"
            ]
        },{
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
        }]
    },
    devServer: {
        port: 9000,
        open: true,
    },
    plugins: [
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: 'style.css',
        }),
    ],
};
