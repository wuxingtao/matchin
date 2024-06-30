<template>
<!--  <el-dialog :visible.sync="dialogVisible" width="764px" :title="title" custom-class="k-dialog"-->
<!--             :close-on-click-modal="false">-->

<!--  </el-dialog>-->
  <div class="lucky-dialog" v-if="dialogVisible" @click="handleClose">
    <div class="luck-mask">
      <div class="luck-lists flex flex_jc_c">
        <luck-item v-for="(item,index) in luckList" :key="index" :info="item"></luck-item>
      </div>
    </div>
  </div>

</template>

<script>
import luckItem from './lucky-item'
export default {
  name: 'lucky-dialog' ,
  components:{luckItem},
  props: {
    visible: false ,
    luckList: {
      type: Array ,
      default: () => []
    },
    level:{
      type:String|Number,
      default:()=>0
    }
  } ,
  data() {
    return {
      dialogVisible: false ,
      // 暂无数据
      noData: false ,
    }
  } ,
  methods:{
    handleClose() {
      this.dialogVisible = false
    } ,
    handleConfirm() {
      this.handleClose()
    },
  },
  watch:{
    visible(val) {
      this.dialogVisible = val
      // setTimeout(()=>{
      //   this.handleClose()
      // },30000)
    } ,
    dialogVisible(val) {
      if (!val) {
        this.$emit('close')
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../base.scss';
.lucky-dialog{
  position: fixed;
  top: 0;
  bottom: 0;
  left:0;
  right:0;
  margin: auto;
}
.luck-mask{
  position: fixed;
  background: rgba(0,0,0,.8);
  width: 80%;
  height: 50%;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  border-radius: vm(20);
  padding: vm(40);
}
.luck-lists{
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  align-items: center;
  height: vm(300);
  margin: auto;
}

.lottery__title{
  text-align: center;
}
.lottery__text{
  font-size:vm(36);
  font-weight: bold;
  color: #ffffff;
  margin-bottom:vm(22);
}
.lottery__title-bottom{
  img{
    width: vm(519);
    height: vm(44);
  }
}
</style>
