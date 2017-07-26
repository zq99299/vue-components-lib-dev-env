import Vue from 'vue'
import App from './App'
import router from './router'
import eui from '../src/index'

Vue.use(eui)
Vue.config.productionTip = false
// 开启debug模式
Vue.config.debug = true

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
