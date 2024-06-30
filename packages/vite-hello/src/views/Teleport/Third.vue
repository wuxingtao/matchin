<template>
  <div class="child-page">
    <teleport to="body">
      <div>CC</div>
    </teleport>
    <teleport to="body">
      <div>DD</div>
    </teleport>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue'

export default defineComponent({
  name: 'Third',
  props: {},
  setup() {
    const state = reactive({
      page: 'third'
    })
    return { ...toRefs(state) }
  }
})
</script>

<style scoped></style>
