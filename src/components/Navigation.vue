<template>
    <div>
        <nav>
            <!--<router-link  to="/news">News</router-link>-->
            <!--<router-link  to="/about-us">About us</router-link>-->
            <!--<router-link  to="/contact">Contact</router-link>-->
            <router-link v-for="routes in links"
                         v-bind:key="routes.id"
                         :to="`${routes.page}`"> {{routes.text}} </router-link>
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
            text: 'home',
            page: '/'
          },
          {
            id: 1,
            text: 'news',
            page: '/news'
          },
          {
            id: 2,
            text: 'about us',
            page: '/about-us'
          },
          {
            id: 3,
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