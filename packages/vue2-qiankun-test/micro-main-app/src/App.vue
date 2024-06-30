<template>
  <a-config-provider>
    <section id="xt-main-app">
      <section class="xt-menu-wrapper">
        <main-menu></main-menu>
      </section>
      <section class="xt-frame-wrapper">
        <!--    主应用渲染区域，用于挂载主应用路由触发的组件    -->
        <router-view v-show="$route.name"></router-view>
        <!--        子应用渲染区，用于挂载子应用节点-->
        <section v-show="!$route.name" id="frame"></section>
      </section>
    </section>
  </a-config-provider>
</template>
<script>
export default {
  components: {
    'main-menu': () => import('@/components/layout/main-menu')
  },
  data() {
    return {}
  }
}
</script>
<style>
#xt-main-app {
  display: flex;
}

.xt-menu-wrapper {
  width: 300px;
}

.xt-frame-wrapper {
  width: 100%;
}
</style>
