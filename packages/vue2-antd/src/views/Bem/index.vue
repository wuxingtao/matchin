<template>
<div>
  <div class="header">
    <h2> 不使用BEM </h2>
    <div>
      <h2>内容title</h2>
      <div class="content">
        内容区域
      </div>
    </div>
  </div>
  <form class="search-form">
    <div class="search-form__content">
      <input class="search-form__input">
      <button class="search-form__content-button">搜索</button>
    </div>
  </form>
</div>
</template>

<script>
export default {
  name: 'Bem'
}
</script>

<style lang="scss" scoped>
.header{
  h2{
    color:red;
    h2{
      color:blue;
    }
  }
}
</style>
