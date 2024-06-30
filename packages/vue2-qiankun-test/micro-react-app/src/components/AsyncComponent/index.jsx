/**
 * @Desc: 动态导入组件
 * @Author: wu xingtgao
 * @Date: 2020/6/30
 */
import React, { Component } from 'react'

const AsyncComponent = (importComponent) => {
  return class AsyncComponent extends Component {
    constructor () {
      super()
      this.state = {
        component: null
      }
    }

    componentWillMount () {
      importComponent().then(cmp => {
        this.setState({
          component: cmp.default
        })
      })
    }

    componentWillUnmount () {
      this.setState({
        component: null
      })
    }

    render () {
      const C = this.state.component
      return C ? <C {...this.props} /> : null
    }
  }
}

export default AsyncComponent
