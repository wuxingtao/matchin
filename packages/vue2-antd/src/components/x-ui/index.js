/**
 * @Desc: index
 * @Author: wu xingtgao
 * @Date: 2021/1/7
 */
import Vue from 'vue'
import XButton from './x-button'
import XInput from '@/components/x-ui/x-input'
import XIcon from './x-icon'

const components = [
  XButton,
  XInput,
  XIcon
]

const install = () => {
  components.filter(v => typeof v !== 'function').forEach(v => Vue.component(v.name, v))
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default install
