<template>
  <div class="container">
    <Header></Header>
      <router-view></router-view>
    <Footer></Footer>
  </div>
</template>

<script>
  import Header from '../components/Header.vue'
  import Footer from '../components/Footer.vue'

export default {
  name: 'MainLayout',
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
