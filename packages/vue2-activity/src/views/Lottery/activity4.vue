<template>
  <activity-page :gift-title="giftTitle" :level="level" :gift-img="giftImg" />
</template>

<script>
import ActivityPage from './activity-page'

export default {
  name: "activity4",
  components:{ActivityPage},
  data(){
    return {
      giftTitle:'跨越之夜奖',
      level:4,
      giftImg:'https://ic-h5.kye-erp.com/intro/kye-night/gift-4.png'
    }
  },
  methods:{

  }
}
</script>

<style lang="scss" scoped>
//@import './activity';
</style>
