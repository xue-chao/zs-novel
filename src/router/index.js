import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'bookshelf',
      component: (resolve) => { require(['@/components/bookshelf/BookShelf'], resolve) }
    },
    {
      path: '/search',
      name: 'search',
      component: (resolve) => { require(['@/components/search/Search'], resolve) }
    }
  ]
})
