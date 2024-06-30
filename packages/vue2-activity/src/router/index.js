import Vue from 'vue';
import VueRouter from 'vue-router';
import LotteryRoute from '@/router/lottery';

Vue.use(VueRouter);

const routes = [
  {
    path: '/' ,
    name: 'Home' ,
    component: () => import('../views/Table-list/index.vue')
  } ,
  {
    path: '/about' ,
    name: 'About' ,
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  } ,
  {
    path: '/mapDetail' ,
    name: 'MapDetail' ,
    component: () => import(/* webpackChunkName: "about" */ '../views/MapDetail')
  } ,
  LotteryRoute
];

const router = new VueRouter({
  routes
});

export default router;
export {
  routes
};
