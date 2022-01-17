import Vue from 'vue'
import VueRouter from 'vue-router'
import Compp1 from '../views/Compp1.vue'
import Compp2 from '../views/Compp2.vue'
import Compp3 from '../views/Compp3.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/c1',
  },
  {
    path: '/c1',
    name: 'Compp1',
    component: Compp1
  },
  {
    path: '/c2',
    name: 'Compp2',
    component: Compp2
  },
  {
    path: '/c3',
    name: 'Compp3',
    component: Compp3
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
