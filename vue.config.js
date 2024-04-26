const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  // 关闭eslint校验
  lintOnSave: false ,
  devServer:{
    proxy: {
      '/api1': {
          target: 'http://localhost:3001',
          changeOrigin: true,
          pathRewrite: {
              '/api1': ''
          }
      }
  } ,
  client: {
    overlay: false
  },
  host: '0.0.0.0',
  port: '8081'  // open: true 自动打开浏览器
  },
  
})
