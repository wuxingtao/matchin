/**
 * @Desc: v-color
 * @Author: wu xingtgao
 * @Date: 2021/1/11
 */
export default {
  name: 'color',
  bind: function (el, binding) {
    console.log(el, binding)
    if (el && binding && binding.expression) {
      el.style.color = binding.expression
    }
  }
}
