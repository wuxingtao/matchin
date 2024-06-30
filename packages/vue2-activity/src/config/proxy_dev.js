/**
 * @Desc: proxy_dev
 * @Author: wu xingtao
 * @Date: 2021/5/24
 */

const proxy_config = {
  '/router/rest':{
    target: 'http://localhost:8081',
    pathRewrite: {
      '^/router/rest/': '/router/rest/'
    }
  }
}

const createProxy = (params)=>{
  params = params || proxy_config
  const result = {}
  Object.keys(params).forEach(item=>{
    if(params[item]['target']){
      result[item] = {
        target: params[item]['target'],
        changeOrigin: true,
        ws: true,
        pathRewrite: params[item]['pathRewrite']
      }
    }else{
      result[item] = {
        target: params[item],
        changeOrigin: true
      }
    }
  })
  return result
}



module.exports = {
  createProxy,
  proxy_config
}
