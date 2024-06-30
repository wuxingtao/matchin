<template>
  <div>
    <h2>teleport feature</h2>
    <Child />
    <Third />
  </div>
</template>

<script lang="ts">
import { reactive, toRefs } from 'vue'
import Third from './Third.vue'

export default {
  name: 'Teleport',
  props: {},
  components: {
    Third,
    Child: {
      template: `
              <div class='child-page'>
           <teleport to='body'>
              <div>AA</div>
           </teleport>
          <teleport to='body'>
              <div>BB</div>
          </teleport>
      </div>
  `
    }
  },
  setup() {
    const state = reactive({})
    return { ...toRefs(state) }
  }
}
</script>

<style scoped></style>
