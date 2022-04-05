import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePage from '../components/HomePage'
import UserCrud from '../components/UserCrud'


Vue.use(VueRouter)

const routes = [
  { path: '/',      name: 'HomePage',    component: HomePage   },
  { path: '/users', name: 'UserCrud', component: UserCrud }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
