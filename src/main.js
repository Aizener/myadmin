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

Vue.config.productionTip = false
Vue.prototype.$echarts = echarts
Vue.prototype.$api = api

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
