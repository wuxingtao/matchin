/**
 * @Desc: index
 * @Author: wu xingtgao
 * @Date: 2021/1/11
 */
import Vue from 'vue'

const XInput = Vue.component('x-input', {
  functional: true,
  render (h, ctx) {
    return h('a-input', ctx.data, ctx.children)
  }
})

export default XInput
