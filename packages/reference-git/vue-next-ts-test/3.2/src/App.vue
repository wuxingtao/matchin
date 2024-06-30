<template>
  <div id="nav">
    <template v-if="routerRecord">
      <router-link v-for="(item, index) in routerRecord" :to="item.path" :key="index">{{ item.name }}</router-link>
    </template>
  </div>
  <router-view />
</template>
<script setup>
import { routes } from '@/router'
import { ref } from 'vue'
const routerRecord = ref(routes)
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
  margin-right: 15px;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.nav-item {
  margin-right: 15px;
}
</style>
