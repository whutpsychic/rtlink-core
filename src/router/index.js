import { createRouter, createWebHashHistory } from 'vue-router'
import Document from '../pages/Document/main.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/document'
    },
    {
      path: '/document',
      redirect: '/document/fn/commaedNumber'
    },
    // -------------------------------
    {
      path: '/document',
      component: Document,
      children: [
        {
          path: '/document/fn/commaedNumber',
          component: () => import('../views/fn/commaedNumber/main.vue'),
        },
        {
          path: '/document/fn/copyToClipboard',
          component: () => import('../views/fn/copyToClipboard/main.vue'),
        },
        {
          path: '/document/fn/genDatesArr',
          component: () => import('../views/fn/genDatesArr/main.vue'),
        },
        {
          path: '/document/fn/genMonthsArr',
          component: () => import('../views/fn/genMonthsArr/main.vue'),
        },
        {
          path: '/document/fn/genYearsArr',
          component: () => import('../views/fn/genYearsArr/main.vue'),
        },
        {
          path: '/document/fn/genNumberStream',
          component: () => import('../views/fn/genNumberStream/main.vue'),
        },
        {
          path: '/document/fn/genRandomCode',
          component: () => import('../views/fn/genRandomCode/main.vue'),
        },
        {
          path: '/document/fn/genRandomNumber',
          component: () => import('../views/fn/genRandomNumber/main.vue'),
        },
        {
          path: '/document/fn/isWeixin',
          component: () => import('../views/fn/isWeixin/main.vue'),
        },
        // ---------------------------------------------
        {
          path: '/document/global/finalDo',
          component: () => import('../views/global/finalDo/main.vue'),
        },
        // ---------------------------------------------
        {
          path: '/document/prototype/Array/contains',
          component: () => import('../views/prototype.Array/contains/main.vue'),
        },
        {
          path: '/document/prototype/Array/fillWith',
          component: () => import('../views/prototype.Array/fillWith/main.vue'),
        },
        {
          path: '/document/prototype/Array/pickout',
          component: () => import('../views/prototype.Array/pickout/main.vue'),
        },
        {
          path: '/document/prototype/Array/toDoubleGroups',
          component: () => import('../views/prototype.Array/toDoubleGroups/main.vue'),
        },
      ]
    },
    {
      path: '/guide',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../pages/Guide/main.vue')
    }
  ]
})

export default router
