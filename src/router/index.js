import Vue from 'vue'
import Router from 'vue-router'
import SuperMarket from '@/components/SuperMarket'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'SuperMarket',
      component: SuperMarket
    }
  ]
})
