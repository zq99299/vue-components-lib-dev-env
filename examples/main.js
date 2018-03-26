import Vue from 'vue'
import App from './App'
import router from './router'
// 开发的时候直接引用组件的入口文件,有热加载效果
// import VueComponentsLib from '../src/index'

// 开发完成后，切换成打包好的js和css文件，看是否和开发的时候表现一致
import VueComponentsLib from '../lib/vueComponentsLib.min.js'
import '../lib/styl/vueComponentsLib.min.css'

Vue.use(VueComponentsLib)
Vue.config.productionTip = false
// 开启debug模式
Vue.config.debug = true

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
