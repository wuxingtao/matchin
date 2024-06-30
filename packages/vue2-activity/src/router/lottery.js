/**
 * @Desc: lottery
 * @Author: wu xingtao
 * @Date: 2021/5/21
 */
const LotteryRoute =  {
  path: '/lottery' ,
  name: 'Lottery' ,
  component: () => import(/* webpackChunkName: "about" */ '../views/Lottery'),
  children:[
    {
      path: 'codeView' ,
      name: 'codeView' ,
      component: () => import(/* webpackChunkName: "about" */ '../views/Lottery/codeView'),
    },
    {
      path: 'codeView1' ,
      name: 'codeView1' ,
      component: () => import(/* webpackChunkName: "about" */ '../views/Lottery/codeView1'),
    },
    {
      path: 'ruleDesc' ,
      name: 'ruleDesc' ,
      component: () => import(/* webpackChunkName: "about" */ '../views/Lottery/ruleDesc'),
    },
    {
      path: 'activity0' ,
      name: 'activity0' ,
      component: () => import(/* webpackChunkName: "about" */ '../views/Lottery/activity0'),
    },
    {
      path: 'activity1' ,
      name: 'activity1' ,
      component: () => import(/* webpackChunkName: "about" */ '@views/Lottery/activity1'),
    },
    {
      path: 'activity2' ,
      name: 'activity2' ,
      component: () => import(/* webpackChunkName: "about" */ '../views/Lottery/activity2'),
    },
    {
      path: 'activity3' ,
      name: 'activity3' ,
      component: () => import(/* webpackChunkName: "about" */ '@views/Lottery/activity3'),
    },
    {
      path: 'activity4' ,
      name: 'activity4' ,
      component: () => import(/* webpackChunkName: "about" */ '@views/Lottery/activity4'),
    },
    {
      path: 'superReset' ,
      name: 'superReset' ,
      component: () => import(/* webpackChunkName: "about" */ '@views/Lottery/superReset'),
    },
  ]
}

export default LotteryRoute
