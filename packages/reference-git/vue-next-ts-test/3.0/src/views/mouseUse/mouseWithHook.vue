<template>
  <div class="about">
    <header>使用extends 引入useMousePosition 逻辑</header>
    <h1>鼠标X：<span class="coordinate">{{x}}</span></h1>
    <h1>鼠标Y：<span class="coordinate">{{y}}</span></h1>
  </div>
</template>

<script lang="ts">
import { useMousePosition } from '@/use/mouse.ts'

export default {
  name: 'MouseWithHook',
  setup () {
    const { x, y } = useMousePosition()
    return { x, y }
  }
}
</script>

<style scoped>

</style>
