import Vue from 'vue'
import VueRouter from 'vue-router'
import Remote from '../views/Remote.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Remote',
    component: Remote
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
