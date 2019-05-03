import Vue from 'vue'
import Router from 'vue-router'
import Register from './pages/Register'
import Login from './pages/Login'

Vue.use(Router)

export default new Router({
	// 去除#
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
	  {
        path: '/',
        name: 'login',
        component: Login
      },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/login',
      name: 'login',
	  component: Login
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      // component: () => import(/* webpackChunkName: "about" */ './pages/About.vue')
    }
  ]
})
