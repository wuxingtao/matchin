<template>
  <activity-page :gift-title="giftTitle" :level="level" :gift-img="giftImg" />
</template>

<script>
import ActivityPage from './activity-page'

export default {
  name: "activity2",
  components:{ActivityPage},
  data(){
    return {
      giftTitle:'大疆灵眸Pocket2-全能套装',
      level:2,
      giftImg:'https://ic-h5.kye-erp.com/intro/kye-night/gift-2.png'
    }
  },
  methods:{

  }
}
</script>

<style lang="scss" scoped>
//@import './activity';
</style>
