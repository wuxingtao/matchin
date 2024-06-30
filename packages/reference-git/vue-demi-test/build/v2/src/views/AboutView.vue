<template>
  <div class="about">
    <h1>This is an about page</h1>
    <comp-test />
  </div>
</template>
<script>
import CompTest from '../components/comp-test'
export default {
  name: 'page-about',
  components: {
    CompTest
  },
  props: {}
}
</script>
