/**
 * @Desc: vue.config
 * @Author: wu xingtao
 * @Date: 2022/1/20
 */
const path = require('path')

module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src')
      }
    }
  },
  devServer: {
    port: 9999,
    open: true,
    disableHostCheck: true
  }
}
