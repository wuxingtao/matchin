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
export default {
  name: 'scroll-view',
  data() {
    return {
      dataLists: Array.from(Array(100).keys())
    }
  },
  mounted() {
    window.addEventListener('scroll', this.scrollHandle, true)
  },
  methods: {
    scrollHandle() {
      const target = this.$refs.testRef
      if (!target) {
        return
      }
      const offset = target.getBoundingClientRect() // vue中，使用this.$el获取当前组件的根元素
      // const offset = this.$el.getBoundingClientRect() // vue中，使用this.$el获取当前组件的根元素
      const offsetTop = offset.top
      const offsetBottom = offset.bottom
      // const offsetHeight = offset.height
      // 进入可视区域
      if (offsetTop <= window.innerHeight && offsetBottom >= 0) {
        console.log('进入可视区域')
        // do something...
      } else {
        console.log('移出可视区域')
        // do something...
      }
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
