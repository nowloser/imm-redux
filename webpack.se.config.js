//热部署webpack配置
var path = require("path");
var webpack = require('webpack');
var node_modules_dir = path.resolve(__dirname, 'node_modules');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var htmlWebpackPlugin = require("html-webpack-plugin");
// process.env.NODE_ENV  product or dev
// css autoprefix
var precss = require('precss');
var autoprefixer = require('autoprefixer');
// process.env.NODE_ENV  product or dev

var config = {
        watch: true,
        devtool: 'cheap-module-eval-source-map',
        entry: [
            'webpack-dev-server/client?http://localhost:3000',
            'webpack/hot/only-dev-server',
            './src/entry/index.jsx'
        ],

        output: {
            path: path.resolve(__dirname, 'distSms/'),
            filename: "[name].bundle.js"
        },
        resolve: {
            extensions: ['', '.js', '.jsx']
        }
        ,
        module: {
            loaders: [
                {
                    test: /\.(js|jsx)$/,
                    loaders: ['react-hot', 'babel-loader?presets[]=react&presets[]=es2015',],
                    exclude: /node_modules/,
                    include: __dirname
                },
                {
                    test: /\.css$/,
                    loader: "style!css!postcss"
                },
                {
                    test: /\.scss$/,
                    loader: "style!css!postcss"
                },
                {
                    test: /\.(png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot|json)$/,
                    loader: 'url-loader?limit=118192'
                }
            ]
        },
        postcss: [precss, autoprefixer({
            browsers: ['ie >= 8', 'opera 12.1', 'ios 6', 'android 4']
        })]
        ,

        plugins: [
            new webpack.DefinePlugin({
                'process.env.NODE_ENV': '"development"'
            }),
            new webpack.HotModuleReplacementPlugin(),
            new webpack.NoErrorsPlugin(),
            new htmlWebpackPlugin({
                //filename: path.resolve(__dirname, 'index.html'),
                filename: path.resolve(__dirname, 'distSms/index.html'),
                chunks: ['app', 'lib'],
                template: './app.html',
                minify: {
                    collapseWhitespace: true,
                    collapseInlineTagWhitespace: true,
                    removeRedundantAttributes: true,
                    removeEmptyAttributes: true,
                    removeScriptTypeAttributes: true,
                    removeStyleLinkTypeAttributes: true,
                    removeComments: true
                }
            }),
        ]
    }
    ;
module.exports = config;
