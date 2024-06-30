<template>
  <div>
    <x-button class="x-button-test">aaaa</x-button>
    <a-form-model :label-col="{ span: 5 }" :wrapper-col="{ span: 12 }">
      <a-form-item  label="focusTest">
        <x-input/>
      </a-form-item>
      <a-form-item>
        <input type="text" value="11" v-focus="focused" class="inputTest">
      </a-form-item>
      <a-form-item>
        <x-icon></x-icon>
      </a-form-item>
    </a-form-model>

  </div>
</template>

<script>
export default {
  name: 'xui-button',
  data () {
    return {
      focused: true
    }
  }
}
</script>

<style scoped>

</style>
