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
  name: 'scroll-view-new',
  data() {
    return {
      dataLists: Array.from(Array(100).keys()),
      observer: null
    }
  },
  mounted() {
    this.handleObserve()
  },
  destroyed() {
    if (this.observer) {
      this.observer.disconnect()
    }
  },
  methods: {
    handleObserve() {
      this.sectionObserve()
      const target = this.$refs.testRef
      if (!target) {
        return
      }
      this.observer.observe(target)
    },
    sectionObserve() {
      this.observer = new IntersectionObserver((entries) => {
        if (entries[0].intersectionRatio > 0) {
          console.log('进入可视区域')
          window.alert('进入可视区域')
          // do something
        } else {
          console.log('移出可视区域')
          // do something
        }
      })
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
