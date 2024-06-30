export default {
  // 节流
  throttle: (fn, wait) => {
    let timer = null; let t_start;
    return function (...args) {
      const context = this;
      // const args = arguments;
      const t_cur = +new Date();
      clearTimeout(timer);
      if (t_start) t_start = t_cur;
      if (t_cur - t_start > wait) {
        fn.apply(context, args)
        t_start = t_cur;
      } else {
        timer = setTimeout(() => {
          fn.apply(context, args)
        }, wait)
      }
    }
  },
  // 防抖
  debounce: (fn, delay = 200) => {
    let timer;
    return function (...args) {
      const th = this;
      // const args = arguments;
      if (timer) {
        clearTimeout(timer);
      }
      timer = setTimeout(function () {
        timer = null;
        fn.apply(th, args);
      }, delay);
    };
  }
}
