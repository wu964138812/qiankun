import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
const routes = [{
  path: '/',
  component: () => import('@/components/HelloWorld'),
  name: 'home',
}, ]
const router = new Router({
  mode: 'hash',
  routes,
  strict: process.env.NODE_ENV !== 'production',
})

export default router