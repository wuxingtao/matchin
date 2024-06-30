/**
 * @Desc: public-path
 * @Author: wu xingtao
 * @Date: 2021/12/30
 */
// micro-react-app/src/public-path.js
if (window.__POWERED_BY_QIANKUN__) {
  // 动态设置 webpack publicPath，防止资源加载出错
  // eslint-disable-next-line no-undef
  __webpack_public_path__ = window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__;
}
