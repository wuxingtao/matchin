<template>
  <div>
    <form action="" ref="formRef">
      <input type="text" v-model="rootData.transNum" />
    </form>
    <div class="page__title">
      <p class="page-name">root title is : {{ state.title }}</p>
      <span class="title">father title is : {{ fatherTitle }}</span>
    </div>

    <father-comp @change="fatherPhoneChange" ref="fatherRef" />
  </div>
</template>

<script setup>
import { computed, defineExpose, provide, reactive, ref, toRefs } from 'vue'
import FatherComp from './father-comp'

const state = reactive({
  title: '根页面',
  pageLevel: 1
})
const formRef = ref(null)
const fatherRef = ref(null)
const rootData = {
  transType: 'test',
  transValue: 'transValue',
  transNum: 0
}
provide('rootData', rootData)

const fatherTitle = computed(() => {
  return fatherRef.value?.title
})

function fatherPhoneChange(val) {
  console.log(val)
}
</script>

<style lang="scss" scoped>
.page__title {
  margin-bottom: 40px;
}
</style>
