<template>
    <div class="container">
        <router-link  to="/">Home page</router-link>
        <h2>Welcome! Authorized</h2>
        <router-view></router-view>
    </div>
</template>

<script>
  export default {
    name: "AuthLayout",
    components: {

    }
  }
</script>

<style scoped>

</style>