<template>
  <router-link class="m-lr-10"
               v-for="(route,index) in state.routes"
               :key="index" :to="route.path">{{route.name}}</router-link>
  <router-view />
</template>

<script setup>
import { reactive } from 'vue'
import {routes} from './router'
const state = reactive({ routes})

// This starter template is using Vue 3 experimental <script setup> SFCs
// Check out https://github.com/vuejs/rfcs/blob/script-setup-2/active-rfcs/0000-script-setup.md
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
.m-lr-10{
  margin-left: 10px;
  margin-right: 10px;
}
</style>
