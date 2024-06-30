# script setup 语法糖
> 为了让我们写Composition API代码更加的简洁
> 
> vue3.0 正式版已经发布一段时间了，除了拥抱函数式编程，在vue3.2还带来了新的语法糖，用以替代原本需要大量 return 的写法

## 基础使用

想要使用 setup 模式只要在 script 标签上面加个 setup 属性就可以了。这个模式下不需要 return 和 export 就可以在模板中使用。

## 使用变更

### props 使用defineProps
```js
import {defineProps} from 'vue'
const props = defineProps({
  foo:String
})
```

### slots、attrs使用的变更
```js
import {useSlots,useAttrs} from 'vue'
const slots = useSlots()
const attrs = useAttrs()

```

### emit使用的变更

```js
import {defineEmits} from 'vue'
const emit = defineEmits(['h-update','h-delete','update:msg'])
function handleClick(){
  emit('h-update')
}
```


## setup 语法糖缺陷

* 这个语法糖暂时还不支持单文件导出内容，如果使用 export 导出模块会导致编译报错。

* 不支持设置组件名，传统的 options 写法有个 name 属性可以设置组件名，这个在编写递归组件的时候很有用

* 不支持 jsx，不过如果需要使用 jsx 的话，个人还是建议直接使用传统方式，setup 函数可以直接 return 一个 jsx 函数。而且 Vue 3.0 已经默认支持 css module 了，jsx 的体验会比之前更好。
