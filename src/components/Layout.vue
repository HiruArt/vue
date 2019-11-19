<template>
  <div class="layout">
    <Header></Header>
    <vue-router></vue-router>
    <Footer></Footer>
  </div>
</template>

<script>
  import Header from './Header.vue'
  import Footer from './Footer.vue'

export default {
  name: 'Layout',
  props: {

  },
  components: {
    Header,
    Footer
  }
}
</script>

<style scoped>

</style>
