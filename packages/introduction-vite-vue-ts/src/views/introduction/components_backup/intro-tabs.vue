<template>
  <div class="intro-tabs">
    <div class="intro-tabs__header">
      <div
        :class="['intro-tabs__item', item.active && 'is-active']"
        v-for="(item, index) in panes"
        :key="index"
        :id="`tab-${index}`"
        @click="e => handleTabClick(item, item.paneName, e)"
      >
        {{ item.paneName }}
      </div>
    </div>
    <div class="intro-tabs__content">
      <slot></slot>
    </div>
  </div>
</template>

<script setup>
import { Fragment, getCurrentInstance, onMounted, onUpdated, provide, ref, useSlots, watch } from 'vue'

const instance = getCurrentInstance()
const props = defineProps({
  activeName: String,
  modelValue: String
})
const emit = defineEmits(['tab-click', 'update:modelValue', 'input'])

const currentName = ref(props.modelValue || props.activeName || '0')

const slots = useSlots()
const parentSlots = slots.default()
const paneStatesMap = {}
const panes = ref([])

provide('rootTabs', {
  props,
  currentName
})

provide('updatePaneState', pane => {
  paneStatesMap[pane.uid] = pane
})

watch(
  () => props.modelValue,
  modelValue => {
    setCurrentName(modelValue)
  }
)

function setPaneInstances(isForceUpdate) {
  if (parentSlots) {
    const children = instance.subTree.children
    const content = Array.from(children).find(({ props }) => {
      return props.class === 'intro-tabs__content'
    })
    if (!content) return
    const paneInstanceList = getPaneInstanceFromSlot(content).map(paneComponent => {
      return paneStatesMap[paneComponent.uid]
    })

    const panesChanged = !(
      paneInstanceList.length === panes.value.length &&
      paneInstanceList.every((pane, index) => pane.uid === panes.value[index].uid)
    )
    if (isForceUpdate || panesChanged) {
      panes.value = paneInstanceList
    }
  } else if (panes.value.length !== 0) {
    panes.value = []
  }
}

function getPaneInstanceFromSlot(vnode, paneInstanceList = []) {
  Array.from(vnode.children[0].children || []).forEach(node => {
    let type = node.type
    type = type.name || type
    // if (type === 'IntroTabPane' && node.component) {
    if (node.component && node.component.exposed?.componentName === 'IntroTabPane') {
      paneInstanceList.push(node.component)
    } else if (type === Fragment || type === 'template') {
      getPaneInstanceFromSlot(node, paneInstanceList)
    }
  })
  return paneInstanceList
}

function handleTabClick(tab, tabName, event) {
  setCurrentName(tabName)
  emit('tab-click', tab, event)
}

function setCurrentName(value) {
  if (currentName.value !== value) {
    changeCurrentName(value)
  } else {
    changeCurrentName(value)
  }
}

function changeCurrentName(value) {
  currentName.value = value
  emit('input', value)
  emit('update:modelValue', value)
}

onUpdated(() => {
  setPaneInstances()
})

onMounted(() => {
  setPaneInstances()
})

console.log(parentSlots[0].type)
</script>

<style lang="scss" scoped>
.intro-tabs {
  &__header {
  }

  &__item {
    display: inline-block;
    padding: 15px;
    cursor: pointer;
  }

  &__content {
  }
}
</style>
