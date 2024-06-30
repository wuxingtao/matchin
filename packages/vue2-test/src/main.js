import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import VueCompositionAPI from '@vue/composition-api'
import IntersectionObserver from 'intersection-observer'
Vue.use(ElementUI)
Vue.use(VueCompositionAPI)
Vue.use(IntersectionObserver)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app')
