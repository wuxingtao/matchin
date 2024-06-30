<template>
  <div class="page-container">
    <h1>{{viewName}}</h1>
    <count-state></count-state>
  </div>
</template>

<script>
import {reactive,toRefs} from 'vue'
import CountState from '@components/count-state';

export default {
  name: 'index' ,
  components: {CountState} ,
  setup() {
    let date = reactive({
      viewName: '计算页面'
    });
    return {...toRefs(date)}
  }
};
</script>

<style lang="less">
@import "./index.less";
</style>
