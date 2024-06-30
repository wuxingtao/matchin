<template>
  <activity-page :gift-title="giftTitle" :level="level" :gift-img="giftImg" />
</template>

<script>
import ActivityPage from './activity-page'

export default {
  name: "activity3",
  components:{ActivityPage},
  data(){
    return {
      giftTitle:'跨越高定飞机礼盒',
      level:3,
      giftImg:'https://ic-h5.kye-erp.com/intro/kye-night/gift-3.png'
    }
  },
  methods:{

  }
}
</script>

<style lang="scss" scoped>
//@import './activity';
</style>
