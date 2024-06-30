<template>
  <activity-page :gift-title="giftTitle" :level="level" :gift-img="giftImg" />
</template>

<script>
import ActivityPage from './activity-page'

export default {
  name: "activity0",
  components:{ActivityPage},
  data(){
    return {
      giftTitle:'华为MATE40RS保时捷限量款',
      level:0,
      giftImg:'https://ic-h5.kye-erp.com/intro/kye-night/gift-0.png'
    }
  },
  methods:{

  }
}
</script>

<style lang="scss" scoped>
//@import './activity';
</style>
