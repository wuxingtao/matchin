/**
 * @Desc: index
 * @Author: wu xingtao
 * @Date: 2022/8/31
 */
import CompTest from '@/components/comp-test'
// import Vant from 'vant'

if (typeof window !== 'undefined' && window.Vue) {
  if (window.Vue.component) {
    window.Vue.component(CompTest.name, CompTest)
  } else if (window.Vue.createApp) {
    const app = window.Vue.createApp()
    app.component(CompTest.name, CompTest)
  }
}

export default {
  install: (app) => {
    // app.use(Vant)
    app.component(CompTest.name, CompTest)
  }
}
