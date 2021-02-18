import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const ctx = require.context('./', true, /\.js$/)
const modules = {}
ctx.keys().forEach(item => {
  if (item !== './index.js') {
    const parts = item.split('/')
    const lastStr = parts[parts.length - 1]
    const moduleName = lastStr.split('.')[0]
    modules[moduleName] = ctx(item).default || ctx(item)
  }
})

export default new Vuex.Store({
  modules
})
