export default {
  namespaced: true,
  state: {
    tabs: [
      [
        { name: '系统信息', index: '/' }
      ],
      [
        {
          name: '管理员',
          index: '/system/1',
          children: [
            { name: '管理组', index: '/system/group' },
            { name: '管理列表', index: '/system/list' }
          ]
        },
        {
          name: '控制台',
          index: '/system/2',
          children: [
            { name: '系统设置', index: '/system/setting' },
            { name: '操作记录', index: '/system/record' }
          ]
        }
      ],
      [
        {
          name: '图片管理',
          index: '/content/1',
          children: [
            { name: '图片列表', index: '/content/imgs' }
          ]
        },
        {
          name: '文章管理',
          index: '/content/2',
          children: [
            { name: '新闻列表', index: '/content/news' },
            { name: '布告板列表', index: '/content/board' },
            { name: '常见问题', index: '/content/question' }
          ]
        },
        {
          name: '提问管理',
          index: '/content/3',
          children: [
            { name: '提问列表', index: '/content/question/list' }
          ]
        },
        {
          name: '友情链接',
          index: '/content/4',
          children: [
            { name: '友情链接列表', index: '/content/links' }
          ]
        }
      ],
      [
        {
          name: '用户管理',
          index: '/users/1',
          children: [
            { name: '用户列表', index: '/users/list' },
            { name: '用户认证', index: '/users/certificate' }
          ]
        },
        {
          name: '账号明细',
          index: '/users/2',
          children: [
            { name: '积分明细', index: '/users/score' },
            { name: '余额明细', index: '/users/money' }
          ]
        },
        {
          name: '邀请管理',
          index: '/users/3',
          children: [
            { name: '邀请记录', index: '/users/record' }
          ]
        },
        {
          name: '奖品证书',
          index: '/users/4',
          children: [
            { name: '专家名单', index: '/users/expert' }
          ]
        }
      ]
    ]
  },
  getters: {
    showTabs (state, getters, root) {
      // 计算属性，根据当前NavMenu的选中项，返回对应的Aside的列
      const indexName = root.navs.currName
      const navs = root.navs.navs
      const index = navs.findIndex(item => item.indexName === indexName)
      return state.tabs[index] || []
    }
  }
}
