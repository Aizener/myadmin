export default {
  namespaced: true,
  state: {
    currName: '/',
    navs: [
      {
        name: '首页',
        label: '首页',
        indexName: '/'
      },
      {
        name: '用户管理',
        label: '用户管理',
        indexName: '/users'
      },
      {
        name: '内容管理',
        label: '内容管理',
        indexName: '/content'
      },
      {
        name: '系统管理',
        label: '系统管理',
        indexName: '/system'
      },
      {
        name: '栏目一',
        label: '栏目一',
        indexName: '/category1'
      },
      {
        name: '栏目二',
        label: '栏目二',
        indexName: '/category2'
      }
    ]
  },
  mutations: {
    setCurrName (state, value) {
      state.currName = value
    }
  }
}
