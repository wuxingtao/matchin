import { onMounted, reactive, toRefs } from 'vue'

/**
 * @Desc: countNum
 * @Author: wu xingtao
 * @Date: 2021/12/11
 */
function useCountNum() {
  const state = reactive({
    countNum: 60,
    smsText: '获取验证码'
  })

  async function startCountDown(callback: () => void) {
    try {
      if (callback) {
        await callback()
      }
      state.smsText = `${state.countNum}s后重新获取`
      const timeInterval = setInterval(() => {
        if (state.countNum > 0) {
          state.countNum--
          state.smsText = `${state.countNum}s后重新获取`
        } else {
          clearInterval(timeInterval)
          state.smsText = '重新获取'
          state.countNum = 60
        }
      }, 1000)
    } finally {
      console.log('finaly')
    }
  }

  onMounted(async () => {
    // await startCountDown()
  })

  return { ...toRefs(state), startCountDown }
}

export { useCountNum }
