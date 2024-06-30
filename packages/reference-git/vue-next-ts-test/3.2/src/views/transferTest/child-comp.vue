<template>
  <div class="child-comp">
    <p>root provide value : {{ rootData.transType }}</p>
    <p>root provide transNum : {{ rootData.transNum }}</p>
    <p>prop value from father: {{ props.fatherValue }}</p>
    <span>child输入内容</span>
    <input type="text" v-model="inputValue" @input="handleInputChange" />
  </div>
</template>
<script lang="ts" setup>
import { defineEmits, defineExpose, defineProps, inject, reactive, ref } from 'vue'

const props = defineProps({
  fatherValue: String || Number
})
// const emit = defineEmits('valueChange')
const emit = defineEmits<{
  (e: 'valueChange', value: string): void
}>()

const state = reactive({})

const inputValue = ref(null)

const rootData = inject('rootData') || {}

function handleInputChange(event: { target: { value: string } }) {
  if (event.target.value) {
    emit('valueChange', event.target.value)
  }
}

defineExpose({ inputValue })
</script>

<style lang="scss" scoped>
.child-comp {
  background-color: #42b983;
  padding: 15px;
}
</style>
