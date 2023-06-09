/*
 * @Author: yhl
 * @Date: 2022-09-30 14:30:54
 * @LastEditors: Do not edit
 * @LastEditTime: 2023-06-06 14:17:43
 * @FilePath: /low-code-js/src/router/index.js
 */
import {
  createRouter,
  createWebHashHistory,
} from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/login/index.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
