<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>

<script>
export default {
  name: 'about',
  data: function () {
    return {
      pageName: 'about'
    }
  },
  created () {
    console.log(this.$global)
  }
}
</script>
