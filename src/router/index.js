import { createRouter, createWebHistory } from 'vue-router'
import Document from '../pages/Document/main.vue'
import Guide from '../pages/Guide/main.vue'
import DeepClone from "../views/DeepClone/main.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [

    // 默认展示 Document
    {
      path: '/',
      redirect: '/document/deepClone'
    },
    // 默认 Document 展示第一个 deepClone
    {
      path: '/document',
      redirect: '/document/deepClone'
    },
    {
      path: '/document/',
      component: Document,
      children: [
        { path: 'deepClone', component: DeepClone },
        { path: 'genRandomNum', component: () => import('../views/GenRandomNum/main.vue') },
      ]
    },
    {
      path: '/guide',
      name: 'guide',
      component: Guide
    },
    // 默认返回
    {
      path: '/:pathMatch(.*)',
      redirect: '/document/deepClone'
    },
    // {
    //   path: '/quickstart',
    //   name: 'quickstart',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/quickstart.vue')
    // }
  ]
})

export default router
