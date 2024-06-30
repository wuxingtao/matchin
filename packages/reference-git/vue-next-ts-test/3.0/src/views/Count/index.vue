<template>
  <div class="page-container">
    <h1>{{ viewName }}</h1>
    <count-item></count-item>
  </div>
</template>

<script lang="ts">
import { defineAsyncComponent, reactive, toRefs } from 'vue';

const asyncComponent = defineAsyncComponent(
  () =>
    new Promise((resolve, reject) => {
      resolve({
        template: '<div>I am async !</div>'
      });
    })
);

export default {
  name: 'index',
  components: {
    // 异步组件
    CountItem: defineAsyncComponent(() => import('@/components/count-item/index.vue'))
  },
  setup () {
    const date = reactive<{ viewName: string }>({
      viewName: '计算页面'
    });
    return { ...toRefs(date) };
  }
};
</script>

<style scoped>

</style>
