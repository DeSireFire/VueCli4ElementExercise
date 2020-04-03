import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  // 主页
  {
    path: '/',
    component: () => import('../views/home/index'),
    hidden: true
  },

  // 封面
  {
    path: '/cover',
    component: () => import('../views/cover/index'),
    hidden: true
  },

  // 登录页
  {
    path: '/login',
    component: () => import('../views/login/index'),
    hidden: true
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
