## vue3 升级指南

### 关于全局变量
>由于Vue3中全局API都会通过app.xxx的方法调用，所以之前通过Vue.prototype.xxx
> 绑定的全局方法和变量将无法使用，可以采用如下方式来代替：

```
//在main.js中：
app.config.globalProperties.http = function(){}

//在vue组件中：
this.http()

```

### typescript 全局变量

>方案一使用any
```ts
(<any>window).bb = 10;
(window as any).cc = 20;
```

>方案二 使用d.ts 声明文件


## tsconfig配置详情
```json5
{
  "compilerOptions": { // 编译选择
    "target": "es5", // 指定ECMAScript目标版本。允许的值为“es3”、“es5”、“es6”、“es2015”、“es2016”、“es2017”、“es2018”或“esnext”。
    "lib": [ // 指定要包含在编译中的库文件。
      "dom",
      "dom.iterable",
      "esnext"
    ],
    "allowJs": true, // 允许编译javascript文件。
    "skipLibCheck": true, // 跳过声明文件的类型检查
    "esModuleInterop": true, // 为运行时babel生态系统兼容性提供“……importstar”和“……importdefault”帮助，并为类型系统兼容性启用“——allowSyntheticDefaultImports”。CommonJS/AMD/UMD 互通性
    "experimentalDecorators": true, // 支持装饰器模式
    "allowSyntheticDefaultImports": true, // 允许从没有默认导出的模块进行默认导入。这并不影响代码发出，只影响类型查询。
    "strict": true, // 启用所有严格的类型检查选项。
    "strictPropertyInitialization": true, // 更严格的属性检查 要确保每个实例的属性都会初始值，可以在构造函数里或者属性定义时赋值。
    "forceConsistentCasingInFileNames": true, // 不允许对同一文件使用不一致大小写的引用。
    "module": "esnext", // 指定模块代码生成:“none”、“commonjs”、“amd”、“system”、“umd”、“es2015”或“esnext”。
    "moduleResolution": "node", // 指定模块解析策略:“node”(node)或“classic”
    "resolveJsonModule": true, // 包含导入的模块。json的扩展。
    "isolatedModules": true, // 无条件地为未解决的文件发出导入。
    "noEmit": true, // 不要发出输出。
    "jsx": "preserve", // 指定JSX代码生成:'preserve'、'react'或' reactive -native'。
    "paths": {
      "@/*": ["src/*.ts","src/components/print-ui/*.vue"]
    },
    "typeRoots": [
      "./src/typings",
      "./@types",
      "./node_modules/@types"
    ]
  },
  "include": [ // 包含目录
    "src"
  ],
  "exclude": ["node_modules/*"]
}
```

## vue.config
### 增加HardSourceWebpackPlugin 提升构建速度
