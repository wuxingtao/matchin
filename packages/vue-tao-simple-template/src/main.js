import Vue from 'vue'
import App from './App.vue'
import router from './router'
// import store from './store'

Vue.config.productionTip = false

// new Vue().$mount('#app')
new Vue({
    router,
    render: h => h(App),
    el: '#app', component: {App}
})
