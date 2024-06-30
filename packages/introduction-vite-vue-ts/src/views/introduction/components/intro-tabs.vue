<!-- item 存在content 仅适用于该特殊效果 -->
<template>
  <div class="intro-tabs">
    <div class="intro-tabs__header" ref="headerRef">
      <div :class="['intro-tabs__item', `tab-${item.paneName}`,item.active && 'is-active']"
           v-for="(item,index) in panes" :key="index" :id="`tab-${index}`"
           @click="(e)=>handleTabClick(item,item.paneName,e)">
        <span class="title">{{ item.paneName }}</span>
        <div :class="['intro-tabs__item-content']">
            <component :is="parentSlots[index]" ></component>
        </div>
      </div>
    </div>
    <div :class="['intro-tabs__content','animate__animated animate__fadeIn']" ref="contentRef" v-show="contentShow">
      <slot></slot>
    </div>
  </div>
</template>

<script setup>
import { Fragment, getCurrentInstance, nextTick, onMounted, onUpdated, provide, ref, useSlots, watch } from 'vue'

const instance = getCurrentInstance()
const props = defineProps({
  activeName: String,
  modelValue: String
})
const emit = defineEmits(['tab-click', 'update:modelValue', 'input'])

const currentName = ref(props.modelValue || props.activeName || '0')
const contentShow = ref(false)

const slots = useSlots()
const parentSlots = slots.default()
const paneStatesMap = {}
const panes = ref([])
const headerRef = ref(null)
const contentRef = ref(null)

provide('rootTabs', {
  props,
  currentName
})

// 更新pane信息
provide('updatePaneState', (pane) => {
  paneStatesMap[pane.uid] = pane
})

watch(() => props.modelValue, modelValue => {
  setCurrentName(modelValue)
})


function setPaneInstances (isForceUpdate) {
  if (parentSlots) {
    const children = instance.subTree.children
    const content = Array.from(children).find(({ props }) => {
      return props.class.indexOf('intro-tabs__content') !== -1
    })
    if (!content) return
    const paneInstanceList = getPaneInstanceFromSlot(content).map(paneComponent => {
      return paneStatesMap[paneComponent.uid]
    })

    const panesChanged = !(paneInstanceList.length === panes.value.length && paneInstanceList.every((pane, index) => pane.uid === panes.value[index].uid))
    if (isForceUpdate || panesChanged) {
      panes.value = paneInstanceList
    }
  } else if (panes.value.length !== 0) {
    panes.value = []
  }
}

function getPaneInstanceFromSlot (vnode, paneInstanceList = []) {
  Array.from((vnode.children[0].children || [])).forEach(node => {
    let type = node.type
    type = (type).name || type
    if (node.component && node.component.exposed?.componentName === 'IntroTabPane') {
      paneInstanceList.push(node.component)
    } else if (type === Fragment || type === 'template') {
      getPaneInstanceFromSlot(node, paneInstanceList)
    }
  })
  return paneInstanceList
}

function handleTabClick (tab, tabName, event) {
  setCurrentName(tabName)
  emit('tab-click', tab, event)
}

function setCurrentName (value) {
  if (currentName.value !== value) {
    changeCurrentName(value)

  } else {
    changeCurrentName(value)
  }
}

function changeCurrentName (value) {
  currentName.value = value
  // updateContentPosition()
  emit('input', value)
  emit('update:modelValue', value)
}

function updateContentPositionOld () {
  contentShow.value = false
  nextTick(()=>{
    setTimeout(()=>{
      contentShow.value = true
      const $header = headerRef.value
      const selectItem = $header?.querySelector(`.tab-${currentName.value}`)
      const contentLeft = selectItem.offsetLeft + selectItem.offsetWidth
      contentRef.value.style.left = `${contentLeft}px`
    },200)
  })
}

// 更新content布局定位
function updateContentPosition(){
  contentShow.value = false
  nextTick(()=>{
    const $header = headerRef.value
    const index = panes.value?.findIndex(item=>item.paneName === currentName.value) || 0
    contentRef.value.style.left = `${(index + 1)*50}px`
    contentShow.value = true

  })
}

function initialPosition(){
  if(panes.value){
    panes.value.forEach(item=>{
      const selectItem = headerRef.value?.querySelector(`.tab-${item.paneName}`)
      item.left = selectItem?.offsetLeft + selectItem?.offsetWidth
    })
  }

}

onUpdated(() => {
  setPaneInstances()
  initialPosition()
})

onMounted(() => {
  setPaneInstances()
  initialPosition()
})

</script>

<style lang='scss' scoped>
.intro-tabs {
  &__header {

  }

  &__item {
    display: inline-block;
    cursor: pointer;
  }

  &__content {

  }
}
</style>
