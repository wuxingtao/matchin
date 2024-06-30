<template>
<div class="code-item ">
  <div class="img-avatar">
    <img :src="portrait" alt="">
  </div>
  <div class="info font-color">
    <div class="code">抽奖码：{{info.prizeNo}}</div>
    <div class="phone">{{info.mobile}}</div>
  </div>
</div>
</template>

<script>
export default {
  name: 'code-item',
  props:{
    info:{
      type:Object,
      default:()=>{}
    }
  },
  computed:{
    portrait(){
      return this.info.headPortrait || require('@assets/images/lottery/avatar_default.jpeg')
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../base.scss';
.code-item{
  margin-bottom: 40px;
  flex: 0 0 33.33% !important;
}
.code{
  margin-bottom:6px;
}
.phone{
  font-size: vm(12);
}
.info{
  font-size:vm(16);
  text-align: center;
  *{
    font-weight: 500;
  }
}
.font-color{
  color:#551b25;
}
.img-avatar{
  width: vm(100);
  height:vm(100);
  //margin-right: vm(10);
  margin: 0 auto vm(8);
  img{
    width:100%;
    border-radius:100%;
  }
}
</style>
