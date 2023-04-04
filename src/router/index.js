import Vue, { isProxy } from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Index',
    component: () => import('../views/index.vue'),
    redirect: '/home',
    children: [
      {
        path: 'home',
        name: '/home',
        component: () => import('../views/menuPage/home.vue'),
        meta: { title: '首页' }
      },
      {
        path: 'results',
        name: '/results',
        component: () => import('../views/menuPage/results.vue'),
        meta: { title: '科研成果' }
      },
      {
        path: 'about',
        name: '/about',
        component: () => import('../views/menuPage/about.vue'),
        meta: { title: '联系我们' }
      },
      {
        path: 'resources',
        name: '/resources',
        component: () => import('../views/menuPage/resources.vue'),
        meta: { title: '资源' }
      },
      {
        path: 'articleDetail/:id',
        name: 'articleDetail',
        component: () => import('../views/articleDetail.vue'),
        meta: { title: '文章' }
      },
    ]
  },
  {
    path: '/login',
    name: '/login',
    component: () => import('../views/admin/login.vue'),
    meta: { title: '登录' }
  },
  {
    path: '/test',
    name: '/test',
    component: () => import('../views/test.vue'),
    meta: { title: '测试' }
  },
  {
    path: '/404',
    name: '/404',
    component: () => import('../views/404.vue'),
    meta: { title: '404' }
  },
  {
    path: '*',
    redirect: '/404'
  },
  {
    path: '/admin',
    name: 'admin',
    component: () => import('../views/admin/management/index.vue'),
    children: [
      {
        path: 'addArticle',
        name: '/admin/addArticle',
        component: () => import('../views/admin/management/article/addArticle.vue'),
        meta: { title: '添加文章' }
      },
      {
        path: 'articleList',
        name: '/admin/articleList',
        component: () => import('../views/admin/management/article/articleList.vue'),
        meta: { title: '文章列表' }
      },
      {
        path: 'articleEdit',
        name: '/admin/articleEdit',
        component: () => import('../views/admin/management/article/articleEdit.vue'),
        meta: { title: '编辑' }
      },
      {
        path: 'addResources',
        name: '/admin/addResources',
        component: () => import('../views/admin/management/resources/addResources.vue'),
        meta: { title: '新增资源' }
      },
      {
        path: 'resourcesList',
        name: '/admin/resourcesList',
        component: () => import('../views/admin/management/resources/resourcesList.vue'),
        meta: { title: '资源列表' }
      },
      {
        path: 'resultsList',
        name: '/admin/resultsList',
        component: () => import('../views/admin/management/resources/resultsList.vue'),
        meta: { title: '成果列表' }
      },
      {
        path: 'addResult',
        name: '/admin/addResult',
        component: () => import('../views/admin/management/resources/addResult.vue'),
        meta: { title: '新增成果' }
      },
      {
        path: 'swipeList',
        name: '/admin/swipeList',
        component: () => import('../views/admin/management/pageSetting/swipe.vue'),
        meta: { title: '轮播图设置' }
      },
      {
        path: 'basicSetting',
        name: '/admin/basicSetting',
        component: () => import('../views/admin/management/pageSetting/basicSetting.vue'),
        meta: { title: '基本信息设置' }
      },

    ]
  }

]

const router = new VueRouter({
  routes
})

export default router
