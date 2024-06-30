import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './assets/style/bass.scss'

// import XUi from '@wuxingtao/x-ui'

Vue.config.productionTip = false
Vue.use(ElementUI)
// Vue.use(XUi)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
