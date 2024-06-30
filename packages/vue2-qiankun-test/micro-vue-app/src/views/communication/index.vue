<template>
  <div class="page__content">
    <div class="page__content-actions">
      <p>Actions 通信</p>
      <p>current token: {{ currentToken }}</p>
    </div>
    <div class="page__content-shared">
      <p>shared 通信</p>
      <p>current token: {{ sharedToken }}</p>
    </div>
  </div>
</template>

<script>
import actions from '@/shared/actions'
import shareModule from '@/shared'

export default {
  name: 'communication-test',
  data() {
    return {
      currentToken: '', // action 通信token
      sharedToken: '' // shared 通信token
    }
  },
  mounted() {
    // 注册观察者函数
    // onGlobalStateChange 第二个参数为 true，表示立即执行一次观察者函数
    actions.onGlobalStateChange(state => {
      const { token } = state
      this.currentToken = token
      if (!token) {
        this.$message.warning('未检测到Action登录信息')
        // return this.$router.push('/')
      }
      // 获取用户信息
      this.getUserInfo(token)
    }, true)

    this.sharedTokenCheck()
  },
  methods: {
    getUserInfo() {},
    sharedTokenCheck() {
      const shared = shareModule.getShared()
      const token = shared.getToken()
      console.log('shared', shared)

      this.sharedToken = token
      if (!token) {
        this.$message.warning('未检测到Shared登录信息')
        // return this.$router.push('/')
      }
    }
  }
}
</script>

<style scoped></style>
