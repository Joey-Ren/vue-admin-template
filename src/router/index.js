import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'/'el-icon-x' the icon show in the sidebar
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },

  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true
  },

  {
    path: '/',
    component: Layout,
    redirect: '/home',
    children: [{
      path: 'home',
      name: 'home',
      component: () => import('@/views/home/index'),
      meta: { title: '简介', icon: 'dashboard' }
    }]
  },

  {
    path: '/es6',
    component: Layout,
    redirect: '/es6',
    name: 'ES6',
    meta: { title: 'ES6', icon: 'el-icon-s-help' },
    children: [
      {
        path: 'es6',
        name: 'ES6',
        component: () => import('@/views/es6/index'),
        meta: { title: 'ES6', icon: 'table' }
      }
    ]
  },

  {
    path: '/http',
    component: Layout,
    children: [
      {
        path: 'http',
        name: 'HTTP',
        component: () => import('@/views/http/index'),
        meta: { title: 'HTTP', icon: 'form' }
      }
    ]
  },
  {
    path: '/vue',
    component: Layout,
    redirect: '/vue',
    name: 'VUE',
    meta: { title: 'VUE', icon: 'el-icon-s-help' },
    children: [
      {
        path: 'vue2',
        name: 'VUE2.X',
        component: () => import('@/views/vue/vue2.X/index'),
        meta: { title: 'VUE2.X', icon: 'form' }
      },
      {
        path: 'vue3',
        name: 'VUE3.0',
        component: () => import('@/views/vue/vue3.X/index'),
        meta: { title: 'VUE3.0', icon: 'form' }
      }
    ]
  },
  {
    path: '/vue-router',
    component: Layout,
    children: [
      {
        path: 'vue-router',
        name: 'vue-router',
        component: () => import('@/views/vue-router/index'),
        meta: { title: 'vue-router', icon: 'form' }
      }
    ]
  },
  {
    path: '/vuex',
    component: Layout,
    children: [
      {
        path: 'vuex',
        name: 'vuex',
        component: () => import('@/views/vuex/index'),
        meta: { title: 'VUEX', icon: 'form' }
      }
    ]
  },
  {
    path: '/smallProgram',
    component: Layout,
    children: [
      {
        path: 'smallProgram',
        name: 'SmallProgram',
        component: () => import('@/views/smallProgram/index'),
        meta: { title: 'SmallProgram', icon: 'form' }
      }
    ]
  },

  // TODO 保留三级链接demo样例
  // {
  //   path: '/nested',
  //   component: Layout,
  //   redirect: '/nested/menu1',
  //   name: 'Nested',
  //   meta: {
  //     title: 'Nested',
  //     icon: 'nested'
  //   },
  //   children: [
  //     {
  //       path: 'menu1',
  //       component: () => import('@/views/nested/menu1/index'), // Parent router-view
  //       name: 'Menu1',
  //       meta: { title: 'Menu1' },
  //       children: [
  //         {
  //           path: 'menu1-1',
  //           component: () => import('@/views/nested/menu1/menu1-1'),
  //           name: 'Menu1-1',
  //           meta: { title: 'Menu1-1' }
  //         },
  //         {
  //           path: 'menu1-2',
  //           component: () => import('@/views/nested/menu1/menu1-2'),
  //           name: 'Menu1-2',
  //           meta: { title: 'Menu1-2' },
  //           children: [
  //             {
  //               path: 'menu1-2-1',
  //               component: () => import('@/views/nested/menu1/menu1-2/menu1-2-1'),
  //               name: 'Menu1-2-1',
  //               meta: { title: 'Menu1-2-1' }
  //             },
  //             {
  //               path: 'menu1-2-2',
  //               component: () => import('@/views/nested/menu1/menu1-2/menu1-2-2'),
  //               name: 'Menu1-2-2',
  //               meta: { title: 'Menu1-2-2' }
  //             }
  //           ]
  //         },
  //         {
  //           path: 'menu1-3',
  //           component: () => import('@/views/nested/menu1/menu1-3'),
  //           name: 'Menu1-3',
  //           meta: { title: 'Menu1-3' }
  //         }
  //       ]
  //     },
  //     {
  //       path: 'menu2',
  //       component: () => import('@/views/nested/menu2/index'),
  //       name: 'Menu2',
  //       meta: { title: 'menu2' }
  //     }
  //   ]
  // },
  // TODO 保留外部链接demo样例
  // {
  //   path: 'external-link',
  //   component: Layout,
  //   children: [
  //     {
  //       path: 'https://panjiachen.github.io/vue-element-admin-site/#/',
  //       meta: { title: 'External Link', icon: 'link' }
  //     }
  //   ]
  // },

  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/404', hidden: true }
]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
