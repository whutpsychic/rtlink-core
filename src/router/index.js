import { createRouter, createWebHistory } from 'vue-router'
import Document from '../pages/Document/main.vue'
import Guide from '../pages/Guide/main.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/document'
    },
    {
      path: '/document',
      name: 'document',
      component: Document
    },
    {
      path: '/guide',
      name: 'guide',
      component: Guide
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
