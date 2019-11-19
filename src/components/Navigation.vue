<template>
    <div>
        <nav>
            <router-link  to="/news">News</router-link>
            <router-link  to="/about-us">About us</router-link>
            <router-link  to="/contact">Contact</router-link>
            <!--<router-link v-for="routes in links"-->
                         <!--v-bind:key="routes.id"-->
                         <!--:to="`${routes.page}`"></router-link>-->
        </nav>
    </div>
</template>

<script>
  export default {
    name: "Navigation",
    data() {
      return {
        links: [
          {
            id: 0,
            text: 'News',
            page: '/news'
          },
          {
            id: 1,
            text: 'About us',
            page: '/about-us'
          },
          {
            id: 2,
            text: 'contact',
            page: '/contact'
          }
        ]
      }
    }
  }
</script>

<style scoped>

</style>