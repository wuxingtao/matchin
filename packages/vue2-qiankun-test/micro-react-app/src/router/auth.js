/**
 * @Desc: auth
 * @Author: wu xingtgao
 * @Date: 2020/6/30
 */
import React from 'react'
import { Redirect } from 'react-router-dom'

const requireAuth = (props) => {
  return <Redirect to="/auth-test" />
}

export default requireAuth
