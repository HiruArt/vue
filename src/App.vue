<template>
  <div id="app">
    <component :is="layout">
      <router-view/>
    </component>
  </div>
</template>

<script>
  export default {
    name: 'app',
    components: {
      DefaultLayout: () => import('./layouts/DefaultLayout.vue'),
    },
    computed: {
      layout() {
        return this.$route.meta.layout || 'default-layout'
      }
    }
  }
</script>

<style>
  @import 'assets/css/main.css';

</style>
