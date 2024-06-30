/**
 * @Desc: index
 * @Author: wu xingtgao
 * @Date: 2021/1/7
 */
import Vue from 'vue'

const XButton = Vue.component('x-button', {
  functional: true,
  render (h, ctx) {
    console.log(ctx)
    // 修改props
    ctx.props.type = 'primary'
    // 修改data 属性
    ctx.data.staticClass = ctx.data.staticClass + ' x-btn'
    ctx.data.attrs = { ...ctx.data.attrs, ...ctx.props }
    // 修改指令
    const directives = ctx.data.directives || []
    ctx.data.directives = [...directives, { name: 'color', expression: 'red' }]
    // const directives = ctx.data.directives || []
    // ctx.data.directive = [...directives, { name: 'drag' }]
    return h('a-button', ctx.data, ctx.children)
  }
})

export default XButton
