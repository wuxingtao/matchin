<template>
  <div class="comp-page__container">
    <h3 style="color: red">test</h3>
    <van-cell is-link @click="showPopup">展示弹出层</van-cell>
    <van-popup v-model:show="show">内容</van-popup>
  </div>
</template>

<script>
import { ref, isVue3 } from 'vue-demi'
import { Cell, Popup } from 'vant'
import { Cell as Cell_v2, Popup as Popup_v2 } from '../../../build/v2/node_modules/vant'
export default {
  name: 'comp-test',
  components: {
    [Popup.name]: isVue3 ? Popup : Popup_v2,
    [Cell.name]: isVue3 ? Cell : Cell_v2
  },
  props: {},
  setup() {
    const show = ref(false)
    const showPopup = () => {
      show.value = true
    }
    return {
      show,
      showPopup
    }
  }
}
</script>

<!--<style lang='scss' scoped>-->
<!--.comp-page__container{-->
<!--  background: #FFFFFF;-->
<!--  h3{-->
<!--    font-size: 16px;-->
<!--    width: 100px;-->
<!--    text-align: center;-->
<!--  }-->
<!--}-->
<!--</style>-->
