const {
  defineConfig
} = require('@vue/cli-service')
const AutoImport = require('unplugin-auto-import/webpack')
const Components = require('unplugin-vue-components/webpack')
module.exports = defineConfig({
  transpileDependencies: true,
  // 默认静态资源路径 (可添加相对路径) 需要区分 生产环境 和 开发环境
  publicPath: process.env.NODE_ENV === "production" ? "./" : "/",
  // build的输出目录 默认为'dist'
  outputDir: "dist",
  // 放置静态资源的目录
  assetsDir: "static",
  // 是否每次保存进行代码检测
  lintOnSave: process.env.NODE_ENV === 'development',
  // 如果你不需要生产环境的 source map，可以将其设置为 false 以加速生产环境构建。
  productionSourceMap: false,
  devServer: {
    open: true, // 启动后自动打开默认浏览器
    host: 'localhost', // 启动时使用的域名
    port: 8088, // 指定端口号
    headers: {
      'Access-Control-Allow-Origin': '*' //允许访问跨域
    },
    proxy: {
      // '/api': {
      // // '/api' 的意义在于，声明axios中url已/api开头的请求都适用于该规则，
      // // 注意是以/api开头，即：axios.post({url: '/api/xxx/xxx'})
      //     // 目标服务器地址
      //     target: '',
      //     // 代理websockets
      //     ws: true,
      //     // 开启代理 (允许跨域)
      //     changeOrigin: true,
      //     pathRewrite: {
      //         //重写路径 比如'/api/aaa/ccc'重写为'/aaa/ccc'
      //         '^/api': '',
      //     }
      // },
    }
  },
  configureWebpack: {
    plugins: [
      AutoImport({
        resolvers: []
      }),
      Components({
        resolvers: []
      })
    ],
    output: {
      library: 'vueApp', //一定要与基座文件中app.js定义的name保持一致
      libraryTarget: 'umd'
    }
  }
})