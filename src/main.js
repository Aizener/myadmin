import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/element.js'
import 'element-ui/lib/theme-chalk/display.css'
import 'normalize.css'
import './assets/css/common.scss'
import * as echarts from 'echarts'
import api from '@/util/http'
import utilJS from '@/util/index'
import { Message } from 'element-ui'

Vue.config.productionTip = false
Vue.prototype.$echarts = echarts
Vue.prototype.$api = api
Vue.prototype.$util = utilJS

Message.install = function (Vue, options) {
  Vue.prototype.$message = Message
}
Vue.use(Message)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
