/**
 * @Desc: craco.config
 * @Author: wu xingtao
 * @Date: 2022/1/5
 */
const path = require('path')
const addPath = dir => path.join(__dirname, dir)

module.exports = {
  webpack: {
    alias: {
      '@': addPath('src'),
      '@pages': addPath('src/pages')
    },
    configure: (webpackConfig, { env, paths }) => {
      webpackConfig.output = {
        ...webpackConfig.output,
        library: `ReactMicroApp`,
        libraryTarget: 'umd',
        chunkLoadingGlobal: `webpackJsonp_ReactMicroApp`
        // jsonpFunction: `webpackJsonp_ReactMicroApp`
      }
      return webpackConfig
    }
  },
  // devServer: (devServerConfig, { env, paths, proxy, allowedHost }) => { return devServerConfig; },
  devServer:{
    // 关闭主机检查，使微应用可以被 fetch webpack-dev-serve4
    // disableHostCheck : true,
    allowedHosts: 'all', // // 代替 disableHostCheck: true
    // 配置跨域请求头，解决开发环境的跨域问题
    headers : {
      "Access-Control-Allow-Origin": "*",
    },
    // 配置 history 模式
    historyApiFallback : true
  }
}
