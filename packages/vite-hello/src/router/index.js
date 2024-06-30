/**
 * @Desc: index
 * @Author: wu xingtgao
 * @Date: 2020/7/8
 */
import { createRouter, createWebHistory } from 'vue-router'
// import Home from '@/views/Home'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About')
  },
  {
    path: '/aboutPosition',
    name: 'AboutPosition',
    component: () => import('@views/AboutWidthPosition')
  },
  {
    path: '/count',
    name: 'Count',
    component: () => import('@views/Count')
  },
  {
    path: '/reactivityApis',
    name: 'ReactivityApis',
    component: () => import('@views/ReactivityApis')
  },
  {
    path: '/teleport',
    name: 'Teleport',
    component: () => import('@views/Teleport')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes: routes
})

export default router
export {
  routes
}
