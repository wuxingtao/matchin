import { onMounted, onUnmounted, ref } from '@vue/composition-api'

/**
 * @Desc: useScrollView
 * @Author: wu xingtao
 * @Date: 2023/3/2
 */
export default function (targetDom) {
  const observer = ref(null) // 监听视图

  onMounted(() => {
    handleInterSection()
  })
  onUnmounted(() => {
    removeIntersection()
  })
  const handleInterSection = () => {
    if (!targetDom.value) {
      return
    }
    if (window.IntersectionObserver) {
      sectionObserve()
      observer.value.observe(targetDom.value)
    } else {
      window.addEventListener('scroll', scrollHandle, true)
    }
  }
  const removeIntersection = () => {
    if (!targetDom.value) {
      return
    }
    if (window.IntersectionObserver) {
      observer.value.disconnect()
    } else {
      window.removeEventListener('scroll', scrollHandle, true)
    }
  }
  const scrollHandle = () => {
    const offset = targetDom.value.getBoundingClientRect() // vue中，使用this.$el获取当前组件的根元素
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
  const sectionObserve = () => {
    observer.value = new IntersectionObserver((entries) => {
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

  return {}
}
