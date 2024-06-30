/**
 * @Desc: index
 * @Author: wu xingtao
 * @Date: 2022/8/31
 */
import CompTest from '../../../../../src/components/comp-test'
// import Vant from 'vant'
// v2本地打包测试-ok
// import CompTest from '../../components/comp-test'
// import Vant from '../../../node_modules/vant/lib/index'

if (typeof window !== 'undefined' && window.Vue) {
  if (window.Vue.component) {
    window.Vue.component(CompTest.name, CompTest)
  } else if (window.Vue.createApp) {
    const app = window.Vue.createApp()
    app.component(CompTest.name, CompTest)
  }
}

export default {
  install: (Vue) => {
    // Vue.use(Vant)
    Vue.component(CompTest.name, CompTest)
  }
}
