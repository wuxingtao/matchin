<template>
  <div class="container">
    <h2>count: {{ count }}</h2>
    <h3>count store: {{ countStore }}</h3>
    <h2>double: {{ double }}</h2>
    <div class="count-tool">
      <button :onClick="handleCountAdd">+</button>
    </div>
  </div>
</template>

<script>
import { reactive, toRefs, computed } from 'vue'
import { useStore } from 'vuex'
import { onBeforeRouteLeave } from 'vue-router'

export default {
  name: 'count-state',
  setup(props, ctx) {
    const state = reactive({
      count: 0,
      double: computed(() => state.count * 2),
      countStore: computed(() => store.state.globalStore.count)
    })

    const store = new useStore()
    // 路由守卫
    onBeforeRouteLeave((to, from, next) => {
      store.dispatch('globalStore/clear_count')
      next()
    })

    const handleCountAdd = () => {
      console.log(ctx)
      state.count++
      store.dispatch('globalStore/addCount')
    }

    return { ...toRefs(state), store, handleCountAdd }
  }
}
</script>

<style scoped>
.count-tool {
  margin: 20px 0;
}
</style>
