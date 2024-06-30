/**
 * @Desc: index
 * @Author: wu xingtao
 * @Date: 2021/12/14
 */
import {createRouter,createWebHistory,RouteRecordRaw} from "vue-router";
import Home from '../views/Home.vue'

const routes:Array<RouteRecordRaw>=[
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/introduction',
    name: 'Introduction',
    component: ()=>import('../views/introduction/index.vue')
  },
  {
    path: '/landing-page',
    name: 'LandingPage',
    component: ()=>import('../views/landingPage/index.vue')
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
