# vue2-antd

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

## 优化antd-vue打包

### icon图标调整

```js
const alias = {
  '@ant-design/icons/lib/dist$': path.resolve(__dirname, './src/icons.js'), // ant-design icon 瘦身
};

```

### moment包优化

```js
    plugins: [
      //去掉momentjs中locale里面不必要的js
      new webpack.ContextReplacementPlugin(/moment[/\\]locale$/, /zh-cn/),
    ]
```

### lodash包优化
```js
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin');
    plugins: [
      new LodashModuleReplacementPlugin(),
    ]
```

### 生产devtool调整
```js
    devtool: process.env.NODE_ENV === 'production' ? false: 'cheap-module-eval-source-map'
```

## vue 组件封装模式
1. 使用template 模式 vue文件

2. 组件渲染模式
使用Vue.component render 注册 参考：x-ui
适合组装组件，给组件增加附加功能，但需要被封装组件支持属性挂载。
