<template>
  <div class="layout">
    <Header></Header>
      <router-view></router-view>
    <Footer></Footer>
  </div>
</template>

<script>
  import Header from '../components/Header.vue'
  import Footer from '../components/Footer.vue'

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
