<template>
  <div id="app">
    <Layout></Layout>
  </div>
</template>

<script>
import Layout from './layouts/Layout.vue'

export default {
  name: 'app',
  components: {
    Layout,
  },
  computed: {
    layout(){
      return 'main-layout'
    }
  }
}
</script>

<style>
  @import '~materialize-css/dist/css/materialize.min.css';
  @import 'assets/css/main.css';

</style>
