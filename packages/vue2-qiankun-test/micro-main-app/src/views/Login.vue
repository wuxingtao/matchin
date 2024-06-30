<template>
  <div class="login">
    <h1>This is an login page</h1>
    <button @click="login">login</button>
  </div>
</template>
<script>
import actions from '@/shared/actions'
import shared from '@/shared'
export default {
  name: 'login',
  data() {
    return {}
  },
  mounted() {
    actions.onGlobalStateChange((state, prevState) => {
      // state: 变更后的状态; prevState: 变更前的状态
      console.log('主应用观察者：token 改变前的值为 ', prevState.token)
      console.log('主应用观察者：登录状态发生改变，改变后的 token 的值为 ', state.token)
    })
  },
  methods: {
    login() {
      setTimeout(() => {
        const token = Math.random() * 1000
        // 登录成功后，设置 token
        actions.setGlobalState({ token })
        shared.setToken(token)
        this.$router.push('/')
      }, 500)
    }
  }
}
</script>
