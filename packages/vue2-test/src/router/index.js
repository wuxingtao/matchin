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
    path: '/slot',
    name: 'Slot',
    component: () => import('../views/slot/index.vue')
  },
  {
    path: '/scroll-view',
    name: 'ScrollView',
    component: () => import('../views/scroll-view/index.vue')
  },
  {
    path: '/scroll-view-new',
    name: 'ScrollViewNew',
    component: () => import('../views/scroll-view-new/index.vue')
  },
  {
    path: '/scroll-view-polyfill',
    name: 'ScrollViewPolyFill',
    component: () => import('../views/scroll-view-new/index-polyfill.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
