import axios from 'axios'
import router from '@router'
import { Message, MessageBox } from 'element-ui'
import ENV from './env'


export const service = axios.create({
  timeout: 10000 // 请求超时时间
})
// request拦截器
service.interceptors.request.use(
  config => {
    // let _token = getToken()
    let _token = ''
    console.log(process.env.VUE_APP_REQUEST)
    if(process.env.VUE_APP_REQUEST){
      config.method = process.env.VUE_APP_REQUEST
    }

    config.baseURL = `${ENV.BASE_URL}?${config.headerUrl}`
    // config.baseURL = `${config.headerUrl}`
    config.headers.appkey = ENV.APP_KEY
    config.headers['Content-Type'] = 'application/json'
    config.headers.method = config.headerUrl


    config.hideErrMsg = config.hideErrMsg || false
    config.toReject = config.toReject || false
    return config
  },
  error => {
    // Do something with request error
    console.log('请求报错', error) // for debug
    Promise.reject(error)
  }
)

// respone拦截器
service.interceptors.response.use(
  response => {
    const res = response.data
    let _token = 'loginToken'
    if ( res.code !== 0  ) {
      // 6001: 无效的token;60010:token为空； 100201: 用户信息已失效
      if ([60010,6001,100201].includes(res.code)) {
        if (_token) {
          sessionStorage.clear()
          MessageBox.confirm('用户信息已失效，请重新登录', '确定登出', {
            showCancelButton: false,
            showClose: false,
            confirmButtonText: '重新登录',
            type: 'warning'
          }).then(() => {
            router.push('/login')
          })
        }
      } else if(![30003,37997,49578].includes(res.code)){ //查无数据
        if(!response.config.hideErrMsg) {
          /** 适配另外一种接口返回数据格式-坑爹的后台接口 */
          if(!res.errCode || res.errCode !== '0000') {
            Message({
              message: res.msg || res.errMsg || '服务器异常，请稍后重试',
              type: 'error',
              duration: 2000
            })
          }
        }
      }
      // 返回promise对象
      return response.config.toReject ? Promise.reject(res) : response.data
    }
    return response.data
  },
  error => {
    Message({
      message: error.message,
      type: 'error',
      duration: 2000
    })
    return Promise.reject(error)
  }
)
export default service

