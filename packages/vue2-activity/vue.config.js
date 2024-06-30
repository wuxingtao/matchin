/* eslint-disable */
const webpack = require('webpack');
const proxy_dev = require('./src/config/proxy_dev')

function resolve(dir) {
  return path.join(__dirname, dir);
}

//路径别名
const alias = {
  '@views': '@/views/',
  '@api': '@/services/api/',
  '@components': '@/components/',
  '@common': '@/common/',
  '@router': '@/router/',
  '@assets': '@/assets',
  '@utils': '@/utils',
  '@enum': '@/enum/'
}

module.exports = {
  lintOnSave: true,
  // baseUrl 已经在vue-cli 3.1中废弃，这里使用publicPath, 生产环境使用二级目录，开发环境使用根目录
  publicPath: process.env.NODE_ENV === 'production' ? '/' : '/',
  // publicPath: process.env.NODE_ENV === 'production' ? './' : '/',
  productionSourceMap: process.env.NODE_ENV === 'production' ? false : true,
  // 第三方插件配置
  pluginOptions: {
    'process.env': {
      NODE_ENV: '"development"'
    }
  },
  configureWebpack: {
    resolve: {
      alias
    },
    devServer:{
      proxy: proxy_dev.createProxy(),
      disableHostCheck: true // 关闭host检查支持映射本地
    },
    plugins: [
      // TODO 跨越之夜抽奖使用
      new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
        'windows.jQuery': 'jquery'
      })
    ],
    devtool: process.env.NODE_ENV === 'production' ? false: 'cheap-module-eval-source-map'
  }
};
