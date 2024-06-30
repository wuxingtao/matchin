<template>
  <div class="comp-page__container">
    <h3 style="color: red">test {{ show }}</h3>
    <van-cell is-link @click="showPopup">展示弹出层</van-cell>
    <van-popup v-model:show="show">内容</van-popup>
  </div>
</template>

<script>
import { ref } from 'vue-demi'
// import { Cell, Popup } from 'vant'
import { Cell, Popup } from '../../../node_modules/vant/lib/index.js'

export default {
  name: 'comp-test',
  components: {
    [Popup.name]: Popup,
    [Cell.name]: Cell
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
