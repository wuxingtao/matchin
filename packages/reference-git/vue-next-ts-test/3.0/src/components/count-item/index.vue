<template>
  <div class="container">
    <h2>count: {{count}}</h2>
    <h2>double: {{double}}</h2>
    <div class="count-tool">
      <button :onClick="handleCountAdd">+</button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs, computed } from 'vue';
// 引入useStore
import { useStore } from 'vuex';
import eventThrottle from '@common/utils/throttle'

interface Count {
  count: number;
  double: object;
}

export default defineComponent({
  name: 'CountItem',
  setup (props, ctx) {
    const store = useStore();
    const state: Count = reactive<Count>({
      count: 0,
      double: computed(() => state.count * 2)
    });
    const handleCountAdd = eventThrottle.throttle(() => {
      state.count++;
      store.dispatch('countStore/add_count');
      console.log('vuex state count: ', store.state.countStore.count);
    }, 100);
    return { ...toRefs(state), handleCountAdd };
  },
  /* 清除count store */
  unmounted () {
    const store = useStore();
    store.commit('countStore/CLEAR_COUNT')
  }
});
</script>

<style scoped>
  .count-tool {
    margin: 20px 0;
  }
</style>
