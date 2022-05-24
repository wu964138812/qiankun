const {
  defineConfig
} = require('@vue/cli-service')
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
})