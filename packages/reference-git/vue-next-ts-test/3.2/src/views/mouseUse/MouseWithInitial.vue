<template>
  <div class="about">
    <h1>
      鼠标X：
      <span class="coordinate">{{ x }}</span>
    </h1>
    <h1>
      鼠标Y：
      <span class="coordinate">{{ y }}</span>
    </h1>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
// 获取鼠标坐标
const x = ref(0)
const y = ref(0)
const update = e => {
  x.value = e.pageX
  y.value = e.pageY
}
onMounted(() => {
  window.addEventListener('mousemove', update)
})
onUnmounted(() => {
  window.removeEventListener('mousemove', update)
})
</script>

<style scoped></style>
