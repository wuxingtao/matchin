import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'

export const routes: Array<RouteRecordRaw> = [
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
    path: '/count-item',
    name: 'CountItem',
    component: () => import('@/views/Count/index.vue')
  },
  {
    path: '/mouse-use',
    name: 'mouseUse',
    component: () => import('@/views/mouseUse/index.vue'),
    children: [
      {
        path: 'initial',
        component: () => import('@/views/mouseUse/MouseWithInitial.vue')
      },
      {
        path: 'useMouse',
        component: () => import('@/views/mouseUse/MouseWithHook.vue')
      }
    ]
  },
  {
    path: '/transfer-test',
    name: 'transferTest',
    component: () => import('@/views/transferTest/index.vue')
  },
  // 作用域插槽测试
  {
    path: '/slot-test',
    name: 'SlotTest',
    component: () => import('@/views/slotTest/index.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
