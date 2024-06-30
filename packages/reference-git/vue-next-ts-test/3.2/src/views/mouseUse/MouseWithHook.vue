<template>
  <div class="about">
    <header>使用extends 引入useMousePosition 逻辑</header>
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

<script setup lang="ts">
import { useMousePosition } from '@/use/mouse.ts'
const { x, y } = useMousePosition()
</script>

<style scoped></style>
