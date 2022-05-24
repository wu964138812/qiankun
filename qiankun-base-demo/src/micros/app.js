/*
 * @Author: karson 
 * @Date: 2021-09-10 16:04:57 
 * @Last Modified by:  karson 
 * @Last Modified time: 2021-09-10 16:04:57 
 */
// 导出的是registerMicroApps的第一个参数，是一个对象数组，其中数组每个字段的作用如下：
// （1）name：微应用的名称，后面改造微应用的时候一定要与这个name对应
// （2）entry：微应用运行的域名加端口，我用的是本地8088端口
// （3）container：启动微应用需要一个dom容器，里面就是这个dom容器的 id
// （4）activeRule：触发启动微应用的规则，当检测到url中含有activeRule的值时，将启动微应用

// 注意事项
// 线上环境时 entry参数是你服务器上访问的文件夹名称
const getActiveRule = (hash) => (location) => location.hash.startsWith(hash);
const apps = [{
  name: 'vueApp', // 名字
  // 默认会加载这个HTML，解析里面的js动态执行 （子应用必须支持跨域）区分开发环境与线上环境
  entry: process.env.NODE_ENV === 'development' ? '//localhost:8088' : `/qiankun-child-application2/`,
  container: '#vue', // 容器
  activeRule: process.env.NODE_ENV === 'development' ? '#/vue' : getActiveRule('#/vue'), // 激活的路径 访问#/vue把应用挂载到#vue上
  props: { // 传递属性给子应用接收
    a: 1,
  }
}]

export default apps