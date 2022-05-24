import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import start from '@/micros/index'

Vue.config.productionTip = false
Vue.use(ElementUI);

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
// 开启
// start({
//   prefetch: false // 取消预加载
// })
// 开启服务,配置项见官方文档
start()