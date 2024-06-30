<template>
  <div id="app">
    <router-link class="m-lr-10"
                 v-for="(route,index) in routes"
                 :key="index" :to="route.path">{{route.name}}</router-link>
    <router-view />
  </div>
</template>

<script>
import {routes} from '@/router'
export default {
  name: 'App',
  data(){
    return {
      routes
    }
  },
  components: {

  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
