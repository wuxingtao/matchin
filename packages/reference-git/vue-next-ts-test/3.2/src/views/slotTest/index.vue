<!-- 作用域插槽 让插槽内容能够访问子组件中才有的数据是很有用的 -->
<template>
  <div>
    <div>title</div>
    <todo-list>
      <template v-slot:default="slotProps">
        <i class="fas fa-check" style="margin-right: 10px">{{ slotProps.index }}</i>
        <span class="green">{{ slotProps.item }}</span>
      </template>
    </todo-list>
  </div>
</template>

<script setup>
import TodoList from './TodoList'
</script>

<style scoped></style>
