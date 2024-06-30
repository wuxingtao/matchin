/* eslint-disable */

const path = require('path')
const HardSourceWebpackPlugin = require('hard-source-webpack-plugin')

function resolve (dir) {
  return path.join(__dirname, dir)
}

const alias = {
  '@': resolve('src'),
  '@views': '@/views/',
  '@router': '@/router/',
  '@store': '@/store/',
  '@components': '@/components/',
  '@assets': '@/assets/',
  "@common" : "@/common/",
  '@utils': '@/common/utils/',
}

module.exports = {
  publicPath: './',
  assetsDir: './',
  filenameHashing: false,
  lintOnSave: true,
  // baseUrl 已经在vue-cli 3.1中废弃，这里使用publicPath, 生产环境使用二级目录，开发环境使用根目录
  // publicPath: process.env.NODE_ENV === 'production' ? '/' : '/',
  // publicPath: process.env.NODE_ENV === 'production' ? './' : '/',
  productionSourceMap: process.env.NODE_ENV !== 'production',
  // 第三方插件配置
  pluginOptions: {
    'process.env': {
      NODE_ENV: '"development"'
    }
  },
  configureWebpack: {
    resolve: {
      alias,
      extensions: ['.vue', 'ts', 'tsx', '.js', '.scss', '.css'],
    },
    devtool: process.env.NODE_ENV === 'production' ? false : 'source-map',
    plugins:[
      // 优化打包速度
      new HardSourceWebpackPlugin()
    ]
    // devtool: 'cheap-module-eval-source-map'
  },
  // chainWebpack: config=>{
  //   config.resolve.extensions = ['.vue', '.js', 'ts','tsx','.scss', '.css']
  // },
}
