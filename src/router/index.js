import Vue from 'vue'
import VueRouter from 'vue-router'
import Remote from '../views/Remote.vue'
import Receiver from '../views/Receiver.vue'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/remote',
    name: 'Remote',
    component: Remote
  },
  {
    path: '/receiver',
    name: 'Receiver',
    component: Receiver
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
