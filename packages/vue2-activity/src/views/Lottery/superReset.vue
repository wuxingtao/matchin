<template>
<div>
  <div @click="initRemote" style="font-size:40px;color:red;z-index:1000;cursor: pointer;">初始化</div>
</div>
</template>

<script>
import { initRemote } from '@views/Lottery/api/api'

export default {
  name: "superRest",
  methods:{
    async initRemote(){
      let res = await initRemote()
    }
  }
}
</script>

<style scoped>

</style>
