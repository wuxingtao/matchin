<template>
  <transition name="fade" enter-active-class="animated fadeIn">
    <div :class="['intro-tab-pane',active && 'pane-show']" v-show="active" role="tabpanel" :id="`pane-${paneName}`" :key="paneName">
      <slot></slot>
    </div>
  </transition>

</template>

<script setup>
import { computed, getCurrentInstance, inject, ref } from 'vue'

const props = defineProps({
  name: String,

})
const componentName = 'IntroTabPane'
const index = ref(null)
const instance = getCurrentInstance()
const $parent = instance?.parent
const rootTabs = inject('rootTabs') // 上层组件tabs提供参数

const updatePaneState = inject('updatePaneState')

if (!updatePaneState) {
  throw new Error(`IntroTabPane must use with IntroTabs`)
}

const active = computed(() => {
  return rootTabs?.currentName.value === (props.name || index.value)
})

const paneName = computed(() => {
  return props.name || index
})

updatePaneState({
  uid: instance.uid,
  instance,
  props,
  paneName,
  active,
  index,
  // isClosable,
})

defineExpose({ componentName, paneName })
</script>

<style lang='scss' scoped>

</style>
