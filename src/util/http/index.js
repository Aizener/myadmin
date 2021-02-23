const ctx = require.context('.', true, /\.js$/)

const modules = {}
ctx.keys().forEach(item => {
  if (['./index.js', './http.js'].includes(item)) {
    return
  }
  Object.assign(modules, ctx(item))
})

export default modules
