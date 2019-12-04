import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: __dirname,
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('./views/Home.vue')
    },
    {
      path: '/news',
      name: 'News',
      component: () => import('./views/News.vue')
    },
    {
      path: '/about-us',
      name: 'AboutUs',
      component: () => import('./views/AboutUs.vue')
    },
    {
      path: '/contact',
      name: 'Contact',
      component: () => import ('./views/Contact.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/auth/Login.vue'),
      meta: {
        layout: 'auth-layout'
      }
    },
    {
      path: '/sign-up',
      name: 'sign-up',
      component: () => import('@/views/auth/SignUp.vue'),
      meta: {
        layout: 'auth-layout'
      }
    }
  ]
})