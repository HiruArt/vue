<template>
    <div>
        <nav>
            <router-link v-for="routes in links"
                         v-bind:key="routes.id"
                         :to="`${routes.page}`"> {{routes.text}} </router-link>
        </nav>

        <div class="header-auth">
            <router-link v-for="routes in auth"
                         v-bind:key="routes.id"
                         :to="`${routes.page}`"> {{routes.text}} </router-link>
        </div>
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
        ],

        auth: [
          {
            id: 0,
            text: 'login',
            page: '/login'
          },
          {
            id: 1,
            text: 'sign up',
            page: '/sign-up'
          },
        ]
      }
    }
  }
</script>

<style scoped>

</style>