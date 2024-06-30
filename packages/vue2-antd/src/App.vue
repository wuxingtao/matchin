<template>
  <div id="app">
    <div id="nav">
      <router-link class="m-lr-10"
                   v-for="(route,index) in routes"
                   :key="index" :to="route.path">{{route.name}}</router-link>
    </div>
<!--  路由使用keep-alive 保留路由状态  -->
    <keep-alive>
      <router-view/>
    </keep-alive>

  </div>
</template>
<script>
import { routes } from '@/router'
export default {
  name: 'App',
  components: {},
  data () {
    return {
      routes: routes
    }
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
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
.m-lr-10{
  margin-right: 10px;
}
</style>
