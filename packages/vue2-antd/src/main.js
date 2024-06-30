import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { Form, FormModel, Button, Input, Radio, Icon, message } from 'ant-design-vue'
import XUi from '@/components/x-ui'
import './globalRegister'

// 生产模式
Vue.config.productionTip = false

Vue.use(XUi)

Vue.use(Form)
Vue.use(FormModel)
Vue.use(Button)
Vue.use(Input)
Vue.use(Radio)
Vue.use(Icon)
// 全局message
Vue.prototype.$message = message

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
