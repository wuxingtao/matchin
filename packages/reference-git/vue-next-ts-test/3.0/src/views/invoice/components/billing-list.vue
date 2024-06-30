<template>
  <div> billing-list</div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue'

export default defineComponent({
  name: 'billing-list',
  props: {
    value: {
      type: String,
      default: ''
    }
  },
  setup (props, ctx) {
    console.log(props, ctx)
    const data = reactive({
      value: 'list'
    })
    return { ...toRefs(data) }
  }
})
</script>

<style scoped>

</style>
