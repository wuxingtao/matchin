import React from 'react'
import Router from './router'

// 设置路由命名空间
const BASE_NAME = window.__POWERED_BY_QIANKUN__ ? "/react" : "";

function App () {
  return (
    <>
      <Router basename={BASE_NAME}>{/* ... */}</Router>
    </>
  )
}

export default App
