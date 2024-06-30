import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import globalRegister from './globalRegister'

const app = createApp(App)
globalRegister(app)
app.use(store).use(router).mount('#app')
