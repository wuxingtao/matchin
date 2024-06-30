<template>
  <div class="code-item ">
    <div class="logo-content">
      <div class="logo-text">
        <div class="logo-b"></div>
      </div>
      <div class="img-avatar logo-pic">
        <img :src="portrait" alt="">
      </div>
    </div>

    <div class="info font-color">
      <div class="code">抽奖码：<span>{{info.prizeNo}}</span></div>
<!--      <div class="phone">{{info.mobile}}</div>-->
    </div>
  </div>
</template>

<script>
export default {
  name: 'lucky-item',
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
  margin: 0 auto vm(40);
}
.code{
  margin-bottom:vm(16);
  font-size: vm(40);
  span{
    font-size:vm(48);
  }
}
.phone{
  font-size: vm(14);
}
.info{
  font-size:vm(16);
  text-align: center;
  *{
    font-weight: 500;
  }
}
.font-color{
  color:#ffffff;
}
.img-avatar{
  //width: vm(200);
  //height:vm(200);
  //margin-right: vm(10);
  margin: 0 auto vm(8);
  img{
    width:100%;
    border-radius:100%;
  }
}


.logo-content {
  transition: transform 0.4s ease;
  -webkit-transform-style: preserve-3d;
  -moz-transform-style: preserve-3d;
  transform-style: preserve-3d;
  width: vm(200);
  height: vm(200);
  border-radius: 50%;
  box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.5);
  border: 1px rgba(0, 0, 0, 0.3) solid;
  position: relative;
  margin: vm(10) auto vm(20);
  .logo-text {
    width: vm(196);
    height: vm(196);
    border-radius: 50%;
    transform: rotateY(180deg);
    -webkit-backface-visibility: hidden;
    -moz-backface-visibility: hidden;
    backface-visibility: hidden;
    background-color: #ffffff;
    position: absolute;
    .logo-b {
      position: relative;
    }
  }
  .logo-pic, {
    width: vm(200);
    height: vm(200);
    -webkit-backface-visibility: hidden;
    -moz-backface-visibility: hidden;
    backface-visibility: hidden;
    transform: translateZ(1px);
    position: absolute;
    img {
      border-radius: 50%;
      width: vm(196);
      height: vm(196);
    }
  }
}


.code-item:hover .logo-content {
  transform: rotateY(180deg);
}

.logo-content{
  animation: switchTrans 4s ease-out;
}

.info{
  animation: switchInfo 5s ease-out;
}
@keyframes switchTrans{
  0%{
    transform: rotateY(180deg);
  }
  50%{
    transform: rotateY(0deg);
  }
  100%{
    transform: rotateY(0deg);
  }
}
@-webkit-keyframes  switchTrans{
  0%{
    transform: rotateY(180deg);
  }
  50%{
    transform: rotateY(0deg);
  }
  100%{
    transform: rotateY(0deg);
  }
}
@-moz-keyframes switchTrans{
  0%{
    transform: rotateY(180deg);
  }
  50%{
    transform: rotateY(0deg);
  }
  100%{
    transform: rotateY(0deg);
  }
}
@-o-keyframes switchTrans{
  0%{
    transform: rotateY(180deg);
  }
  50%{
    transform: rotateY(0deg);
  }
  100%{
    transform: rotateY(0deg);
  }
}


@keyframes switchInfo{
  0%{
    opacity: 0;
  }
  30%{
    opacity: 0.2;
  }
  60%{
    opacity: 0.4;
  }
  80%{
    opacity: 0.8;
  }
  100%{
    opacity: 1;
  }
}
@-webkit-keyframes  switchInfo{
  0%{
    opacity: 0;
  }
  30%{
    opacity: 0.2;
  }
  60%{
    opacity: 0.4;
  }
  80%{
    opacity: 0.8;
  }
  100%{
    opacity: 1;
  }
}
@-moz-keyframes switchInfo {
  0%{
    opacity: 0;
  }
  30%{
    opacity: 0.2;
  }
  60%{
    opacity: 0.4;
  }
  80%{
    opacity: 0.8;
  }
  100%{
    opacity: 1;
  }
}
@-o-keyframes switchInfo{
  0%{
    opacity: 0;
  }
  30%{
    opacity: 0.2;
  }
  60%{
    opacity: 0.4;
  }
  80%{
    opacity: 0.8;
  }
  100%{
    opacity: 1;
  }
}
</style>
