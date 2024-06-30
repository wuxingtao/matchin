/**
 * @Desc: lotteryMixin
 * @Author: wu xingtao
 * @Date: 2021/5/22
 */
import $ from 'jquery'
import { getAllUser } from '@views/Lottery/api/api'
require('./module/tick')
require('./module/transform')
require('./module/3d')

export default {
  data(){
    return {
      luckyResult:[{level: null, imageUr: null, headPortrait: "", prizeNo: "1535", mobile: "186****1470"}],
      personArray: [],
      // 动画对象
      Obj:''
    }
  },
  async mounted(){
    this.initPerson();
    try{
      await this.handleList()
    }catch (e) {
      console.log(e)
    }
    this.initLucky()
  },
  methods: {
    async handleList() {
      let res = await getAllUser({current: 0 , size: 30})
      if (res.code === 0 && res.data) {
        const records = res.data.records || []
        const userList = records.map(item=>{
         return {
           ...item,
           id: item.prizeNo,
           image: item.headPortrait || require('@assets/images/lottery/avatar_default.jpeg'),
           thumb_image:item.headPortrait || require('@assets/images/lottery/avatar_default.jpeg'),
         }
        })
        this.personArray = [...userList,...this.personArray]
      }
    },
    initPerson(){
      let result = []
      for(let i = 0; i < 15; i++){
        let person = {
          id: i,
          image: require("./module/img/tx"+ (i+1)+".jpg"),
          thumb_image: require("./module/img/tx"+ (i+1)+".jpg"),
        }
        result.push(person)
      }
      this.personArray = result
    },
    initLucky(){
      const personArray = this.personArray
      var Obj = {};
      // Obj.luckyResult = [];
      // Obj.luckyResult_history = [];
      // Obj.luckyPrize = '';
      // Obj.luckyNum = 1;
      Obj.M = $('.container').lucky({
        row: 5, //每排显示个数  必须为奇数
        col: 5, //每列显示个数  必须为奇数
        depth: 5, //纵深度
        iconW: 30, //图片的宽
        iconH: 30, //图片的高
        iconRadius: 8, //图片的圆角
        data: personArray //数据的地址数组
      });
      this.Obj = Obj
    },
    luckyStart(){
      this.luckyShow(this.Obj)
    },
    luckyShow(Obj){
      $(".container-3d").addClass('show');
      $(".container").show();
      Obj.M.open();
    },
    lotteryStop(){
      this.Obj.M.stop();
      $(".container-3d").removeClass('show');
      $(".container").hide();
      this.luckVisible = true
    }
  }
}
