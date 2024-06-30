<template>
  <div class="page__container">
    <div class="content__list">
      <div class="content__item" v-for="(item, index) in dataLists" :key="index">
        {{ item }}
      </div>
    </div>
    <div class="test__content" ref="testRef">
      <div class="content__item">2</div>
    </div>
  </div>
</template>

<script>
import { reactive, ref, toRefs } from '@vue/composition-api'
import useScrollView from '@/views/scroll-view-new/useScrollView'

export default {
  name: 'scroll-view-new',
  data() {
    return {
      dataLists: Array.from(Array(100).keys())
    }
  },
  setup() {
    const state = reactive({
      dataLists: Array.from(Array(100).keys())
    })
    const testRef = ref(null)
    useScrollView(testRef)

    return {
      ...toRefs(state),
      testRef
    }
  }
}
</script>

<style scoped>
.content__item {
  height: 40px;
  border: 1px solid gray;
  border-radius: 4px;
}
</style>
