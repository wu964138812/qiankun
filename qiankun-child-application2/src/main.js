import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

let instance = null

function render() {
  instance = new Vue({
    router,
    render: h => h(App)
  }).$mount('#app') // 这里是挂载到自己的HTML中 基座会拿到挂载后的HTML 将其插入进去
}

// 独立运行微应用
// https://qiankun.umijs.org/zh/faq#%E5%A6%82%E4%BD%95%E7%8B%AC%E7%AB%8B%E8%BF%90%E8%A1%8C%E5%BE%AE%E5%BA%94%E7%94%A8%EF%BC%9F
if (!window.__POWERED_BY_QIANKUN__) {
  render()
}

// 如果被qiankun使用 会动态注入路径
if (window.__POWERED_BY_QIANKUN__) {
  // qiankun 将会在微应用 bootstrap 之前注入一个运行时的 publicPath 变量，你需要做的是在微应用的 entry js 的顶部添加如下代码：
  // eslint-disable-next-line no-undef
  __webpack_public_path__ = window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__;
}

// 子应用的协议 导出供父应用调用 必须导出promise
export async function bootstrap(props) {
  console.log(props, "bootstrap")
} // 启动可以不用写 需要导出方法
export async function mount(props) {
  console.log(props, "mount")
  render()
}
export async function unmount(props) {
  console.log(props, "unmount")
  instance.$destroy()
}