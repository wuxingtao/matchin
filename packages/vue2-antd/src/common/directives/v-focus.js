/**
 * @Desc: v-focus
 * @Author: wu xingtgao
 * @Date: 2021/1/11
 */

export default {
  name: 'focus',
  // inserted: function (el) {
  //   console.log(el, 'inserted')
  //   el && el.focus()
  // },
  bind: function (el, binding) {
    console.log(el, binding)
    if (el && binding && binding.expression) {
      setTimeout(() => {
        el.focus()
      }, 1000)
    }
  }
}
