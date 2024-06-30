// 客户端appKey
const APP_KEY = '10145'

// 客户端ecas id
const ECAS_APP_ID = '115'

// 客户端来源id
const APP_FROM_ID = 7

// 离线包环境 <uat,stg>
const VUE_APP_TEST = process.env.VUE_APP_TEST
// 采用相对路径，由运维配置反向代理，重定向到开放平台
const BASE_URL = process.env.VUE_APP_PLAT !== 'offline' ? '/router/rest' : `https://uc${VUE_APP_TEST ? '-' + VUE_APP_TEST : ''}.ky-express.com/router/rest`

const IS_OFFLINE = process.env.VUE_APP_PLAT === 'offline'

export default {
  APP_KEY,
  ECAS_APP_ID,
  APP_FROM_ID,
  BASE_URL,
  IS_OFFLINE
}
