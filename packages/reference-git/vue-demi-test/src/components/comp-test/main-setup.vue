<template>
  <div class="comp-page__container">
    <h3 style="color: red">test</h3>
    <span>{{ show }}</span>
  </div>
</template>

<script>
import { ref } from 'vue-demi'

export default {
  name: 'comp-test',
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
