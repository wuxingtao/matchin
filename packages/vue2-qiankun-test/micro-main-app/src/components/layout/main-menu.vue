<template>
  <div>
    <a-menu :default-selected-keys="['Home']">
      <a-menu-item v-for="item in menus" :key="item.key" @click="handleMenuClick">
        <router-link :to="item.path" :key="item.path">
          <span>{{ item.title }}</span>
        </router-link>
      </a-menu-item>
    </a-menu>
  </div>
</template>

<script>
export default {
  name: 'main-menu',
  data() {
    return {
      menus: [
        {
          key: 'Login',
          title: '登录页',
          path: '/login'
        },
        {
          key: 'Home',
          title: '主页',
          path: '/'
        },
        {
          key: 'VueMicroApp',
          title: 'Vue 主页',
          path: '/vue'
        },
        {
          key: 'VueMicroAppList',
          title: 'Vue 列表页',
          path: '/vue/slot'
        },
        {
          key: 'VueMicroCommunication',
          title: 'Vue 通信页',
          path: '/vue/communication'
        },
        {
          key: 'ReactMicroApp',
          title: 'React 主页',
          path: '/react'
        },
        {
          key: 'ReactMicroAppMessage',
          title: 'React 通信',
          path: '/react/#/message'
        }
      ]
    }
  },
  methods: {
    handleMenuClick({ item, key, keyPath }) {
      console.log(item, key, keyPath)
      // this.$router.push()
    }
  }
}
</script>

<style scoped></style>
