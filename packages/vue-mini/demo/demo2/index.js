/**
 * @Desc: index
 * @Author: wu xingtao
 * @Date: 2021/7/1
 */

const app = new miniVue({
  el:'#app',
  data:{
    msg:"hello,mini vue.js",
    count:666
  },
  methods:{
    increase(){
      this.count++;
    },
    changeMessage(){
      this.msg = "hello,eveningwater!";
    },
    recoverMessage(){
      console.log(this)
      this.msg = "hello,mini vue.js";
    }
  }
})
