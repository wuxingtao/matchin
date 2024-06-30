import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueCompositionAPI from '@vue/composition-api'
// import ComponentPlugins from '../dist/componentPlugins/componentPlugins.umd.js'

Vue.config.productionTip = false
Vue.use(VueCompositionAPI)
// Vue.use(ComponentPlugins)

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app')
