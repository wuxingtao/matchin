/* 注册全局变量 */
interface AppProp {
  [propName: string]: any;
}

// vue 全局变量
const globalRegister = (app: AppProp) => {
  app.config.globalProperties.$global = 10;
};

// 全局变量补充
window.aa = 14;
window.bb = '11'
global.aa = 10

export default globalRegister;
