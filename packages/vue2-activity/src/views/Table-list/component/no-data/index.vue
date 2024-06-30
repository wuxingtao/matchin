<template>
  <div>
    <img src="" alt="">
    <div>{{message|| '暂无数据'}}</div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'no-data',
  props:{
    message: {
      type: String,
      default: () => ''
    }
  },
  data(){
    return{

    }
  }
}

</script>

<style lang="scss" scoped>
.no_data {
  img {
    width: 360px;
    height: 360px;
    display: block;
    margin: auto;
  }
}
</style>
