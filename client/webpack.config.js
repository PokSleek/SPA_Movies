const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const isDevelopment = process.env.NODE_ENV !== 'production';

module.exports = {
    mode: isDevelopment ? 'development' : 'production',
    devtool: isDevelopment ? 'inline-source-map' : 'source-map',
    context: path.resolve(__dirname, './'),
    entry: {
        app: [
            '@babel/polyfill',
            './public/index.js',
        ],
    },
    resolve: {
        alias: {
            'atoms': path.resolve(__dirname, './components/atoms'),
            'molecules': path.resolve(__dirname, './components/molecules'),
            'organisms': path.resolve(__dirname, './components/organisms'),
            'core': path.resolve(__dirname, './core'),
            'store': path.resolve(__dirname, './store'),
            'utils': path.resolve(__dirname, './utils'),
            'images': path.resolve(__dirname, './public/layouts/assets/images'),
        },
        extensions: ['*', '.js', '.jsx'],
    },
    output: {
        filename: '[name].js',
        chunkFilename: '[id]-[chunkhash].js',
        publicPath: '/dist/',
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
        contentBase: path.join(__dirname, 'public'),
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
