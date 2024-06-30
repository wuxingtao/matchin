/**
 * @Desc: routerList
 * @Author: wu xingtgao
 * @Date: 2020/6/30
 */
import { lazy } from 'react'
import AsyncComponent from '@/components/AsyncComponent'

const Home = AsyncComponent(() => import(`@/pages/Home`))
const MessagePost1 = lazy(() => import('@/pages/MessagePost'))
const MessagePost = AsyncComponent(() => import('@/pages/MessagePost'))


export default {
  routes: [
    {
      path:'/message',
      element: <MessagePost />,
      exact:true,
      // render:requireAuth
    },
    {
      path: '/',
      element: <Home />,
    }
  ]
}
