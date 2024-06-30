<!-- 现场调整宽屏适配 -->
<template>
  <div class="detail__page full-screen page-bg">
    <div class="detail__content absolute-center">
      <div class="detail__desc">
        <img src="@assets/images/lottery/qrcode.png" alt="">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "scancode-view"
}
</script>

<style lang="scss" scoped>
@import './global.scss';
.detail__page{
}
.detail__content{
  width: vm(662);
  //height: vm(1012);
  height: vm(1412);
  background:url('https://ic-h5.kye-erp.com/intro/miniprogram/kye-activity/kye-n-codebg.png') no-repeat top left/100% 100%;
}
.detail__desc{
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  height: vm(481);
  text-align: center;
  padding-top: vm(76);
  //padding-top: vm(110);
  img{
    //width: vm(481);
    //height: vm(481);
    width: vm(480);
    height: vm(621);
    border-radius: 100%;
  }
}
.detail__code{
  background-image: linear-gradient(180deg,#f0deba 0%, #eeeeee 50%, #e8ae4f 71%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-align: center;
  font-size: 100px;
  font-weight: 500;
}
</style>
