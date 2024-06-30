<template>
  <a-cascader
    :options="options"
    :load-data="loadData"
    placeholder="Please select"
    change-on-select
    @change="onChange"
  />
</template>
<script>
import { Cascader } from 'ant-design-vue'
export default {
  data () {
    return {
      options: [
        {
          value: 'zhejiang',
          label: 'Zhejiang',
          isLeaf: false
        },
        {
          value: 'jiangsu',
          label: 'Jiangsu',
          isLeaf: false
        }
      ]
    }
  },
  components: { 'a-cascader': Cascader },
  methods: {
    onChange (value) {
      console.log(value)
    },
    loadData (selectedOptions) {
      const targetOption = selectedOptions[selectedOptions.length - 1]
      targetOption.loading = true

      // load options lazily
      setTimeout(() => {
        targetOption.loading = false
        targetOption.children = [
          {
            label: `${targetOption.label} Dynamic 1`,
            value: 'dynamic1'
          },
          {
            label: `${targetOption.label} Dynamic 2`,
            value: 'dynamic2'
          }
        ]
        this.options = [...this.options]
      }, 1000)
    }
  }
}
</script>
