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

          <template v-if="level === 4">
            <div class="special-img">
              <img alt="" src="https://ic-h5.kye-erp.com/intro/kye-night/kye-activity-desc.png">
            </div>
          </template>
          <template v-else>
            <div class="gift__title">{{ giftTitle }}</div>
            <div class="gift__bg">
              <img alt="" src="https://ic-h5.kye-erp.com/intro/kye-night/gift-img.png">
            </div>
            <div class="gift__img">
              <img :src="giftImg" alt="">
            </div>
          </template>
        </div>
      </div>
      <div class="page__right">
        <div class="gift__box">
          <div class="gift__content">
            <div class="code__list">
              <template v-if="pageStatus === 0">
                <user-list ref="userListRef"></user-list>
              </template>
              <template v-else>
                <result-list :dataList="dataList" :level="level"></result-list>
                <div :class="[{'btn-disabled':btnDisabled}]" class="gift__btn btn--lottery-img" @click="drawPrize">
                  <img src="@assets/images/lottery/btn-start.png">
                </div>
                <!--                <div class="gift__btn btn&#45;&#45;lottery-img">-->
                <!--                  <img src="@assets/images/lottery/btn-back.png">-->
                <!--                </div>-->
              </template>
            </div>

          </div>
        </div>
      </div>
    </div>
    <luck-dialog :level="level" :luckList="luckList" :visible="luckVisible" @close="luckClose"></luck-dialog>
  </div>
</template>

<script>
import ResultList from './components/result-list';
import UserList from './components/user-list';
import luckDialog from './components/lucky-dialog';
import { drawOnePrize , drawPrize , queryDrawResult } from '@views/Lottery/api/api';
import lotteryMixin from '@views/Lottery/lotteryMixin';

export default {
  name: 'activity-page' ,
  components: {ResultList , UserList , luckDialog} ,
  mixins: [lotteryMixin] ,
  props: {
    giftTitle: '' ,
    level: {
      type: Number | String ,
      default: () => 0
    } ,
    giftImg: '' ,
  } ,
  data() {
    return {
      dataList: [] ,
      // 当次中奖人
      luckList: [] ,
      // 是否显示当次中奖人
      luckVisible: false ,
      btnDisabled: false ,
      pageStatus: 1 // 0 待抽奖 1 抽奖结果页
    };
  } ,
  mounted() {
    this.getDrawResult();
  } ,
  methods: {
    // 获取整个中奖结果
    async getDrawResult() {
      let res = await queryDrawResult({level: this.level});
      if (res.code === 0 && res.data) {
        this.dataList = res.data;
      }

    } ,
    async drawPrize() {
      if (this.btnDisabled) {
        return;
      }
      this.btnDisabled = true;
      this.luckList = [];
      const promiseFn = this.level !== 4 ? drawPrize : drawOnePrize;
      let res = await promiseFn({level: this.level});
      if (res.code === 0 && res.data && res.data.length > 0) {
        this.luckList = res.data;
        this.luckyStart();
      }
      setTimeout(() => {
        this.btnDisabled = false;
      } , 5000);
    } ,
    switchStatus(val) {
      this.pageStatus = val;
      if (val === 1) {
        this.dataList = [];
      }
    } ,
    luckClose() {
      this.luckVisible = false;
      this.getDrawResult();

    }
  }
};
</script>

<style lang="scss" scoped>
@import './activity';

.btn-disabled {
  cursor: initial;
}

.element, .js_current_dom {
  -webkit-background-size: 100% 100%;
  -moz-background-size: 100% 100%;
  -ms-background-size: 100% 100%;
  -o-background-size: 100% 100%;
  background-size: 100% 100%;
  background-color: #fff
}

.special-img {
  width: vm(1338);
  height: vm(960);
  position: absolute;
  top: -3vw;
  left: -10vw;
}
</style>
