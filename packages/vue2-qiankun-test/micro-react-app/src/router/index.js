/**
 * @Desc: index
 * @Author: wu xingtgao
 * @Date: 2020/6/30
 */
import React from 'react'
import { BrowserRouter, HashRouter, Routes,useRoutes } from 'react-router-dom'
import routes from './routes'

const AppRoutes = ()=>{
  return useRoutes(routes.routes)
}
const Router = process.env.NODE_ENV === 'production' ? BrowserRouter : HashRouter

const Routers = () => {
  return (
    <Router>
      <AppRoutes />
    </Router>
  )
}

export default Routers
