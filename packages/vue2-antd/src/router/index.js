import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/formView',
    name: 'FormView',
    component: () => import('../views/FormView')
  },
  {
    path: '/menuView',
    name: 'MenuView',
    component: () => import('../views/MenuView')
  },
  {
    path: '/cascaderView',
    name: 'CascaderView',
    component: () => import('../views/CascaderView')
  },
  {
    path: '/XUI',
    name: 'XUI',
    component: () => import('../views/XUI')
  },
  {
    path: '/bem',
    name: '/bem',
    component: () => import('../views/Bem')
  }
]

const router = new VueRouter({
  routes
})

export default router
export {
  routes
}
