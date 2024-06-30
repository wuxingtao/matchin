/* eslint-disable */

const path = require('path');
const webpack = require('webpack');
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

function resolve(dir) {
  return path.join(__dirname, dir);
}

const alias = {
  // '@ant-design/icons/lib/dist$': path.resolve(__dirname, './src/icons.js'), // ant-design icon 瘦身
  '@': resolve('src'),
  '@views': '@/views/',
  '@router': '@/router/',
  '@store': '@/store/',
  '@components': '@/components/',
  '@assets': '@/assets/',
  '@utils': '@/utils/',
};

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
      alias,
      extensions: ['.vue', '.js', '.scss', '.css'],
    },
    plugins: [
      //去掉momentjs中locale里面不必要的js
      new webpack.ContextReplacementPlugin(/moment[/\\]locale$/, /zh-cn/),
      new LodashModuleReplacementPlugin(),
      // new BundleAnalyzerPlugin()
    ],
    devtool: process.env.NODE_ENV === 'production' ? false: 'cheap-module-eval-source-map'
  }
};
