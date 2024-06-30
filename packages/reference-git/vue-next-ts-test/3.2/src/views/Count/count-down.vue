<template>
  <div>
    <button @click="handleDown">获取验证码</button>
    <span style="margin-left: 15px">{{ smsText }}</span>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import { useCountNum } from '@/use/countDown'

const { countNum, smsText, startCountDown } = useCountNum()

function handleDown() {
  startCountDown(() => {
    console.log('开始倒计时了')
  })
}
</script>

<style lang="scss" scoped></style>
