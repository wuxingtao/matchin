<template>
  <div class="page-container">
    <div class="box">
      <div class="count-tool">
        <h2>num: {{num}}</h2>
        <button @click="handleNumAdd(0)">+</button>
      </div>
    </div>
    <div class="box">
      <div class="count-tool">
        <h2>num1: {{num1}}</h2>
        <button @click="handleNumAdd(1)">+</button>
      </div>
    </div>

    <div class="box">
      <div class="count-tool">
        <h2>num-double computed: {{doubleNum}}</h2>
      </div>
    </div>
    <div class="box">
      <div class="count-tool">
        <h2>num1-double computed with set: {{doubleNum1}}</h2>
      </div>
    </div>

    <div class="box" v-if="dialogShow">
      <div class="count-tool">
        <h2>num等于5提示出现，并修改num1为5</h2>
      </div>
    </div>

  </div>

</template>

<script>

import { reactive , toRefs , watchEffect,watch,computed,onUnmounted } from 'vue';

export default {
  name: 'ReactivityAPIS' ,
  setup() {
    let state = reactive({
      num: 0 ,
      num1: 0 ,
      total: 0,
      dialogShow:false
    });
    const doubleNum = computed(()=>state.num*2)
    let doubleNum1 = computed({
      get:()=>state.num1*2,
      set:(val)=>{
        state.num1 = val
      }
    })
    onUnmounted(() => {
      console.log('unmounted!')
      stop() // 显式调用返回值以停止侦听 （默认卸载会自动停止监听）
    })

    // 立即执行传入的一个函数，并响应式追踪其依赖，并在其依赖变更时重新运行该函数。卸载会自动停止监听
    const stop = watchEffect(() => {
      state.total = state.num + state.num1;
      console.log('total',state.total)
    });

    // 监听指定数据源
    watch(
      ()=>state.num,
      (num,preNum)=>{
        if(num === 5 && preNum === 4){
          state.dialogShow = true
          doubleNum1.value = 5
        }
      }
    )


    const handleNumAdd = (type=0) => {
      if(type===0){
        state.num++;
      }else if(type === 1){
        state.num1++;
      }
    };
    return {...toRefs(state) ,doubleNum,doubleNum1, stop , handleNumAdd};
  }
};
</script>

<style scoped>
  .box .count-tool{
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>
