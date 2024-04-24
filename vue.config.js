const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
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
  host: '0.0.0.0',
  port: '8081'  // open: true 自动打开浏览器
  }
})
