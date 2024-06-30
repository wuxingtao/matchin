<template>
  <ul>
    <li v-for="(item, index) in items" :key="index">
      <!--      {{ item }}-->
      <slot :item="item" :index="index"></slot>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'TodoList',
  data() {
    return {
      items: ['Feed a cat', 'Buy milk']
    }
  }
}
</script>

<style scoped></style>
