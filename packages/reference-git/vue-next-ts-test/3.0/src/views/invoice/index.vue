<template>
  <div>
    <ListFind></ListFind>
    <BillingList value="2"></BillingList>
  </div>
</template>

<script lang="ts">
import { ListFind, BillingList } from './components'
import { defineComponent, reactive, toRefs, SetupContext } from 'vue'
export default defineComponent({
  name: 'index',
  components: { ListFind, BillingList },
  setup (props, ctx: SetupContext) {
    const data = reactive({
      value: 1
    })
    console.log(props, ctx)
    return { ...toRefs(data) }
  }
})
</script>

<style scoped>

</style>
