<template>
  <div class="container">
    <h2>count: {{ state.count }}</h2>
    <h2>double: {{ state.double }}</h2>
    <div class="count-tool">
      <button :onClick="handleCountAdd">+</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive, computed, onUnmounted } from 'vue'
// 引入useStore
import { useStore } from 'vuex'
import eventThrottle from '@common/utils/throttle'
interface Count {
  count: number
  double: () => number
}

const store = useStore()

const state: Count = reactive<Count>({
  count: 0,
  double: computed(() => state.count * 2)
})

const handleCountAdd = eventThrottle.throttle(() => {
  state.count++
  store.dispatch('countStore/add_count')
  console.log('vuex state count: ', store.state.countStore.count)
}, 100)

/* 清除count store */
onUnmounted(() => {
  store.commit('countStore/CLEAR_COUNT')
})
</script>

<style scoped></style>
