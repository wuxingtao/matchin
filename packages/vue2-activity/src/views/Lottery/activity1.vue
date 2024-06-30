<template>
  <activity-page :gift-title="giftTitle" :level="level" :gift-img="giftImg" />
</template>

<script>
import ActivityPage from './activity-page'

export default {
  name: "activity1",
  components:{ActivityPage},
  data(){
    return {
      giftTitle:'大疆AIR 2S无人机-畅飞套装',
      level:1,
      giftImg:'https://ic-h5.kye-erp.com/intro/kye-night/gift-1.png'
    }
  },
  methods:{

  }
}
</script>

<style lang="scss" scoped>
//@import './activity';
</style>
