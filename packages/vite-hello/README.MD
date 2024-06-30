## vite开发环境测试

### configuration

1. alias 配置会转换为rollup配置 多个配置需要单独resolve

```js
{
  alias:{
    '@/'
  :
    resolve(__dirname , 'src'),
      '@views'
  :
    resolve(__dirname , 'src/views')
  }
}
```

2. css预处理器配置

```js
export default {
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `$injectedColor: orange;` ,
      } ,
      less: {
        modifyVars: {
          'primary-color': '#006EEB' ,
          'link-color': '#006EEB' ,
          'text-color': '#333333' ,
          'text-color-secondary': '#9aa0a6' ,
          'border-color-base': '#EDEDED'
        } ,
        javascriptEnabled: true ,
        sourceMap: true
      }
    }
  }
}
```

3. antd design vue 按需加载

`vite-plugin-style-import`

```js
import styleImport from 'vite-plugin-style-import';
export default defineConfig({
  styleImport({
    libs: [{
      libraryName: 'ant-design-vue' ,
      esModule: true ,
      resolveStyle: (name) => {
      return `ant-design-vue/es/${name}/style/css`;
      } ,
      }]
 })
})
```
## vue3 vuex
改用hooks写法，vue-composition-api中 setup(props,context) context不再支持root

- [x] {useStore} from 'vuex'
- [ ] root.$store 写法已不支持
