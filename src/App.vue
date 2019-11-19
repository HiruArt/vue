<template>
  <div id="app">
    <Layout></Layout>
  </div>
</template>

<script>
import Layout from './components/Layout.vue'

export default {
  name: 'app',
  components: {
    Layout
  }
}
</script>

<style>
  @import '~materialize-css/dist/css/materialize.min.css';
  @import 'assets/css/main.css';

</style>
