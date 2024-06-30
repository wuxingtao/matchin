<template>
  <div class="page__container">
    <div>
      <span>father输入内容</span>
      <input type="text" v-model="inputValue" />
      <p>child-comp input value: {{ childValue }}</p>
    </div>
    <child-comp
      id="child-first"
      class="child-comp--normal"
      :fatherValue="inputValue"
      @valueChange="childChange"
      ref="childRef"
    ></child-comp>
  </div>
</template>

<script>
export default {
  name: 'FatherComp',
  inheritAttrs: false,
  customOptions: {}
}
</script>
<script setup>
import { reactive, ref, defineExpose, computed } from 'vue'
import ChildComp from './child-comp'

const state = reactive({
  title: '父组件'
})

const inputValue = ref(null)
const childRef = ref(null)

const childValue = computed(() => {
  return childRef.value?.inputValue
})

function childChange(val) {
  console.log(`child change ${val}`)
}

defineExpose({ ...state })
</script>

<style lang="scss" scoped>
.page__container {
  padding: 15px;
  background-color: burlywood;
}
</style>
