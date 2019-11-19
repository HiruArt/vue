import Vue from 'vue'
import Router from 'vue-router'
import Contact from './page/Contact.vue'
import AboutUs from './page/AboutUs.vue'
import News from './page/News.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: __dirname,
  routes: [
    {
      path: '/news',
      name: 'News',
      component: News
    },
    {
      path: '/about-us',
      name: 'AboutUs',
      component: AboutUs
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    },
  ]
})