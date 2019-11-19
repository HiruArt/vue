<template>
    <header class="header">
        header
        <Navigation></Navigation>
    </header>
</template>

<script>
  import Navigation from './Navigation.vue'


  export default {
    name: "Header",
    components: {
        'Navigation': Navigation
    }
  }
</script>

<style scoped>

</style>