/*
 * @Author: wuxingtao
 * @Date:  2019/1/30
 */
const path = require('path')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const manifestPlugin = require('webpack-manifest-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const wpConfig = {
    mode: 'development',
    entry: {
        index: path.resolve(__dirname, '../../src/main.js')
    },
    output: {
        path: path.resolve(__dirname, '../../dist'),
        filename: '[name].bundle.js'
    },
    resolve: {
        alias: {
            '@src': path.resolve(__dirname, '../../src')
        }
    },
    plugins: [
        new VueLoaderPlugin(),
        new CleanWebpackPlugin(
            ['./dist/*'],
            {
                root: path.resolve(__dirname, '../../'),
                verbose: true,
                dry: false
            }
        ),
        new HtmlWebpackPlugin({
            title: 'title',
            template: './src/template.html',
            filename: 'index.html'
        })

    ],
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['babel-preset-env'],
                        plugins: [
                            // [
                            //     "transform-runtime",
                            //     {
                            //         "polyfill": true
                            //     },
                            // ],
                            ["syntax-dynamic-import"]
                        ],
                    }
                }
            },
            {
                test:/\.css$/,
                use:['css-loader']
            },
            {
                test:/\.(sass|scss)$/,
                use:['style-loader','css-loader','sass-loader']
            },
            //字体图标处理,url-loader,file-loader
            {
                test: /\.(woff2?|eot|ttf|otf|svg)(\?.*)?$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 10000,
                        name: '/fonts/[name].[ext]'
                    }
                }]
            }
        ]
    },
    devServer: {
        host: 'localhost',
        port: '1573',
        open: true,
    },
    optimization: {
        /*        splitChunks:{
                    cacheGroups:{

                    }
                }*/
    }

}

module.exports = wpConfig;