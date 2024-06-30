<template>
  <div class="page-container">
    <h1>{{ state.viewName }}</h1>
    <count-item></count-item>
    <count-down style="margin: 20px 0" />
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import CountItem from './components/count-item/index.vue'
import CountDown from './count-down.vue'
const state = reactive({
  viewName: '计算页面'
})
</script>

<style scoped></style>
