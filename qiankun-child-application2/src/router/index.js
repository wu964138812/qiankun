import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
const routes = [{
  path: '/home',
  component: () => import('@/components/HelloWorld'),
  name: 'home',
}, ]
const router = new Router({
  mode: 'hash',
  routes,
  strict: process.env.NODE_ENV !== 'production',
})
// histroy模式下要设置base里主应用里面注册的保持一致
// const router = new Router({
//   mode: 'histroy模式下要设置base里主应用里面注册的保持一致',
//   // base里主应用里面注册的保持一致
//   base: '/vue',
//   routes,
//   strict: process.env.NODE_ENV !== 'production',
// })

export default router