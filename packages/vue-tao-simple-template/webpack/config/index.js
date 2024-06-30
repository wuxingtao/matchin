'use strict'
// Template version: 1.3.1
// see http://vuejs-templates.github.io/webpack for documentation.

const path = require('path')

// 所有配置项
module.exports = {
    pc: {
        // curEnv: 'dev', // dev | watch | build  // 手动init
        platform: 'pc', // 用来做个性化配置使用
        assetsSubDirectory: '',   // 输出文件所在目录 pc, 相对于根目录 path
        staticDir: path.resolve(__dirname, '../../assets/static/'),         // 静态文件目录会copy 到 assetsSubDirectory配置 目录下, 忽略.开头文件
        filePath: path.resolve(__dirname, '../../assets/pages/**/*.js'),   // entry 文件
        dirPath: path.resolve(__dirname, '../../assets/pages/'),           // entry 文件相对的目录
        manifestDir: path.resolve(__dirname, '../../../public'),           // 优先取这里 不配置直接放在 assetsSubDirectory 目录下,这里只是为了兼容拆开分端之前
        componentFilePath: path.resolve(__dirname, '../../assets/component/**/test.js'),     // 自定义公共组件test文件
        componentDirPath: path.resolve(__dirname, '../../assets/component/'),  // 自定义公共组件test目录
        syncProxy: 'http://www-soa.gearbest.net/'
    },
    wap: {
        platform: 'wap',    // 文件目录配置暂时相同，分端后只用修改配置即可
        // assetsSubDirectory: 'wap',
        assetsSubDirectory: '',
        staticDir: path.resolve(__dirname, '../../assets/static/'),
        filePath: path.resolve(__dirname, '../../assets/pages/**/*.js'),
        dirPath: path.resolve(__dirname, '../../assets/pages/'),
        manifestDir: path.resolve(__dirname, '../../../public'),
        componentFilePath: path.resolve(__dirname, '../../assets/component/**/test.js'),
        componentDirPath: path.resolve(__dirname, '../../assets/component/'),
        syncProxy: 'http://m-soa.gearbest.net/'
    },
    hashLength: 10,         // hash长度
    useHashName: false,     // 是否文件名hash
    useTimestamp: true,     // 时间戳hash
    curTimestamp: +new Date(),  // 时间戳版本号
    directorySeparator: '_xx_',  // 路径分隔符
    dev: {
        // Paths
        assetsPublicPath: '/',
        proxyTable: {
            '/api': {
                target: 'http://www.rum.com.mashanling.dev65.egocdn.com',
                changeOrigin: true,
                secure: false,
                pathRewrite: {
                    '^/api': ''
                }
            }
        },

        // Various Dev Server settings
        host: 'localhost', // can be overwritten by process.env.HOST
        port: 8080, // can be overwritten by process.env.PORT, if port is in use, a free one will be determined
        autoOpenBrowser: true,
        errorOverlay: true,
        notifyOnErrors: true,
        poll: false, // https://webpack.js.org/configuration/dev-server/#devserver-watchoptions-

        // Use Eslint Loader?
        // If true, your code will be linted during bundling and
        // linting errors and warnings will be shown in the console.
        useEslint: true,
        // If true, eslint errors and warnings will also be shown in the error overlay
        // in the browser.
        showEslintErrorsInOverlay: false,

        /**
         * Source Maps
         */

        // https://webpack.js.org/configuration/devtool/#development
        devtool: 'cheap-module-eval-source-map',

        // If you have problems debugging vue-files in devtools,
        // set this to false - it *may* help
        // https://vue-loader.vuejs.org/en/options.html#cachebusting
        cacheBusting: true,

        cssSourceMap: false
    },

    build: {
        // Template for index.html
        // index: path.resolve(__dirname, '../dist/index.html'),

        // Paths
        assetsRoot: path.resolve(__dirname, '../../../public/dist'),
        prodAssetsRoot: path.resolve(__dirname, '../../../public/prod'),    // prod 命令时使用根目录
        assetsPublicPath: '/dist/',
        prodPreAssetsPublicPath: 'https://css.gbtcdn.com/imagecache/gbw_stage/',     // prod 命令预发布时使用cdn地址
        prodAssetsPublicPath: 'https://css.gbtcdn.com/imagecache/gbw/',     // prod 命令时使用cdn地址
        /**
         * Source Maps
         */
        productionSourceMap: true,
        prodProductionSourceMap: false,  // prod 命令时去掉 sourceMap

        // https://webpack.js.org/configuration/devtool/#production
        devtool: 'cheap-module-source-map',
        // devtool: '#source-map',

        // Gzip off by default as many popular static hosts such as
        // Surge or Netlify already gzip all static assets for you.
        // Before setting to `true`, make sure to:
        // npm install --save-dev compression-webpack-plugin
        productionGzip: true,
        productionGzipExtensions: ['js', 'css'],

        // Run the build command with an extra argument to
        // View the bundle analyzer report after build finishes:
        // `npm run build --report`
        // Set to `true` or `false` to always turn it on or off
        bundleAnalyzerReport: process.env.npm_config_report
    }
}

