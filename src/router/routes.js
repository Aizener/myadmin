export default [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "HomeIndex" */ '@/views/home/Index.vue')
  },
  {
    path: '/system',
    redirect: '/system/group',
    component: () => import(/* webpackChunkName: "HomeIndex" */ '@/views/system/Index.vue'),
    children: [
      {
        path: 'group',
        name: 'Group',
        component: () => import(/* webpackChunkName: "HomeIndex" */ '@/views/system/Group.vue')
      },
      {
        path: 'list',
        name: 'SystemList',
        component: () => import(/* webpackChunkName: "HomeIndex" */ '@/views/system/List.vue')
      },
      {
        path: 'setting',
        name: 'Setting',
        component: () => import(/* webpackChunkName: "HomeIndex" */ '@/views/system/Setting.vue')
      },
      {
        path: 'record',
        name: 'Record',
        component: () => import(/* webpackChunkName: "HomeIndex" */ '@/views/system/Record.vue')
      }
    ]
  },
  {
    path: '/content',
    redirect: '/content/imgs',
    component: () => import(/* webpackChunkName: "HomeIndex" */ '@/views/content/Index.vue'),
    children: [
      {
        path: 'imgs',
        name: 'Imgs',
        component: () => import(/* webpackChunkName: "HomeIndex" */ '@/views/content/Imgs.vue')
      },
      {
        path: 'news',
        name: 'ContentList',
        component: () => import(/* webpackChunkName: "HomeIndex" */ '@/views/content/News.vue')
      },
      {
        path: 'board',
        name: 'Board',
        component: () => import(/* webpackChunkName: "HomeIndex" */ '@/views/content/Board.vue')
      },
      {
        path: 'question',
        name: 'Question',
        component: () => import(/* webpackChunkName: "HomeIndex" */ '@/views/content/Question.vue')
      },
      {
        path: 'question/list',
        name: 'QuestionList',
        component: () => import(/* webpackChunkName: "HomeIndex" */ '@/views/content/QuestionList.vue')
      },
      {
        path: 'links',
        name: 'Links',
        component: () => import(/* webpackChunkName: "HomeIndex" */ '@/views/content/Links.vue')
      }
    ]
  },
  {
    path: '/users',
    redirect: '/users/list',
    component: () => import(/* webpackChunkName: "HomeIndex" */ '@/views/users/Index.vue'),
    children: [
      {
        path: 'list',
        name: 'UsersList',
        component: () => import(/* webpackChunkName: "HomeIndex" */ '@/views/users/List.vue')
      },
      {
        path: 'certificate',
        name: 'Certificate',
        component: () => import(/* webpackChunkName: "HomeIndex" */ '@/views/users/Certificate.vue')
      },
      {
        path: 'score',
        name: 'Score',
        component: () => import(/* webpackChunkName: "HomeIndex" */ '@/views/users/Score.vue')
      },
      {
        path: 'money',
        name: 'Money',
        component: () => import(/* webpackChunkName: "HomeIndex" */ '@/views/users/Money.vue')
      },
      {
        path: 'record',
        name: 'Record',
        component: () => import(/* webpackChunkName: "HomeIndex" */ '@/views/users/Record.vue')
      },
      {
        path: 'expert',
        name: 'Expert',
        component: () => import(/* webpackChunkName: "HomeIndex" */ '@/views/users/Expert.vue')
      }
    ]
  }
]
