<template>
  <div class="page__activity full-screen page-bg">
    <!--  container 动画区域  -->
    <div class="container-3d">
      <div class="container"></div>
      <div class="container-3d-close" @click="lotteryStop">停止抽奖</div>
    </div>
    <div class="page__content">
      <div class="page__aside">
        <div class="page__aside-img">
          <div class="gift__title">华为MATE40RS保驰捷限量款</div>
          <div class="gift__bg">
            <img src="https://ic-h5.kye-erp.com/intro/kye-night/gift-img.png" alt="">
          </div>
          <div class="gift__img">
            <img src="@assets/images/lottery/gift-0.png" alt="">
          </div>
        </div>
      </div>
      <div class="page__right">
        <div class="gift__box">
          <div class="gift__content">
            <div class="code__list">
<!--              <template v-if="pageStatus === 0">-->
<!--                <user-list ref="userListRef"></user-list>-->
<!--              </template>-->
              <result-list :dataList="dataList" :level="level"></result-list>
              <div class="gift__btn btn--lottery-img" :class="[{'btn-disabled':btnDisabled}]" @click="drawPrize">
                <img src="@assets/images/lottery/btn-start.png">
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
    <luck-dialog :visible="luckVisible" :luckList="luckList" :level="level" @close="luckClose"></luck-dialog>
  </div>
</template>

<script>
import ResultList from './components/result-list'
import UserList from './components/user-list'
import luckDialog from './components/lucky-dialog'
import {drawPrize,queryDrawResult} from '@views/Lottery/api/api'

export default {
  name: "activity0",
  components:{ResultList,UserList,luckDialog},
  data(){
    return {
      level:0,
      dataList:[],
      // 当次中奖人
      luckList: [],
      // 是否显示当次中奖人
      luckVisible: false,
      btnDisabled:false,
      pageStatus: 1 // 0 待抽奖 1 抽奖结果页
    }
  },
  mounted(){
    this.getDrawResult()
  },
  methods:{
    async getDrawResult(){
      // this.pageStatus = 1
      let res = await queryDrawResult({level:this.level})
      if(res.code === 0 && res.data){
        this.dataList = res.data
      }
    },
    async drawPrize(){
      if(this.btnDisabled){
        return
      }
      this.btnDisabled = true
      this.luckList = [];
      let res = await drawPrize({level:this.level})
      if(res.code === 0 && res.data && res.data.length >0 ){
        this.luckList = res.data
        this.luckVisible = true
      }
      setTimeout(()=>{
        this.btnDisabled = false
      },10000)
      this.getDrawResult()
    },
    switchStatus(val){
      this.pageStatus = val
      if(val === 1){
        this.dataList = []
      }
    },
    luckClose(){
      this.luckVisible = false
    }
  }
}
</script>

<style lang="scss" scoped>
@import './activity';

</style>
