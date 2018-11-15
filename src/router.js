import Vue from 'vue'
import Router from 'vue-router'

import Home from './views/Visitor/Home'

import Admin from './views/Admin'

import AdminHome from './views/admin/Home.vue'
import Category from './views/admin/Category'
import Units from './views/admin/Units'
import Recipe from './views/admin/Recipes'


Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/admin',
      name: 'admin',
      component: Admin,
      children: [
          {
              path: '',
              name: 'home',
              component: AdminHome
          },
          {
              path: 'cuisines',
              name: 'cuisines',
              component: Category
          },
          {
              path: 'units',
              name: 'units',
              component: Units
          },
          {
              path: 'recipes',
              name: 'recipes',
              component: Recipe
          },
      ]
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/Visitor/About.vue')
    }
  ]
})
