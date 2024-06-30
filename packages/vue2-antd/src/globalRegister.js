/**
 * @Desc: globalRegister 全局注册
 * @Author: wu xingtgao
 * @Date: 2021/1/11
 */
import Vue from 'vue'
import directives from '@/common/directives'

function _forEachByObject (obj, projection) {
  try {
    Object.keys(obj).forEach((key) => {
      projection && projection(obj[key], key)
    })
  } catch (e) {
  }
}
_forEachByObject(directives, (item) => {
  Vue.directive(item.name, item)
})
