import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Home from '../views/Home.vue';

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
    // which is lazy-loaded when the route is visited.Å
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
        component: () => import('@/views/mouseUse/mouseWithInitial.vue')
      },
      {
        path: 'useMouse',
        component: () => import('@/views/mouseUse/mouseWithHook.vue')
      }
    ]
  },
  {
    path: '/invoice',
    name: 'invoice',
    component: () => import('@/views/invoice/index.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router;
