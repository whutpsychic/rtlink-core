import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'
import Document from '../pages/Document/main.vue'
import Guide from '../pages/Guide/main.vue'
import DeepClone from "../views/deepClone/main.vue"

const router = createRouter({
  history: createWebHashHistory(),
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
        { path: 'genRandomNum', component: () => import('../views/genRandomNum/main.vue') },
        { path: 'genRandomNumArr', component: () => import('../views/genRandomNumArr/main.vue') },
        { path: 'genDatesArr', component: () => import('../views/genDatesArr/main.vue') },
        { path: 'genMonthsArr', component: () => import('../views/genMonthsArr/main.vue') },
        { path: 'genRandomCode', component: () => import('../views/genRandomCode/main.vue') },
        { path: 'commaedNumber', component: () => import('../views/commaedNumber/main.vue') },
        { path: 'Global.finalDo', component: () => import('../views/Global.finalDo/main.vue') },
        { path: 'String.contains', component: () => import('../views/String.contains/main.vue') },
        { path: 'Array.contains', component: () => import('../views/Array.contains/main.vue') },
        { path: 'Array.pickout', component: () => import('../views/Array.pickout/main.vue') },
        { path: 'Array.fillWith', component: () => import('../views/Array.fillWith/main.vue') },
        { path: 'Array.toDoubleGroups', component: () => import('../views/Array.toDoubleGroups/main.vue') },
        { path: 'formatDateTimeParams', component: () => import('../views/formatDateTimeParams/main.vue') },
        { path: 'formatCascaderParams', component: () => import('../views/formatCascaderParams/main.vue') },
        { path: 'execCascaderData', component: () => import('../views/execCascaderData/main.vue') },
        { path: 'execTreeData', component: () => import('../views/execTreeData/main.vue') },
        { path: 'tilingTreeData', component: () => import('../views/tilingTreeData/main.vue') },
        { path: 'findTreeParentNodeIdAsCascader', component: () => import('../views/findTreeParentNodeIdAsCascader/main.vue') },
        { path: 'format01Params', component: () => import('../views/format01Params/main.vue') },
        { path: 'buildBlankArgs', component: () => import('../views/buildBlankArgs/main.vue') },
        { path: 'execTableQueryParams', component: () => import('../views/execTableQueryParams/main.vue') },
      ]
    },
    {
      path: '/guide',
      name: 'guide',
      component: Guide
    },
    // // 默认返回
    // {
    //   path: '/:pathMatch(.*)',
    //   redirect: '/document/deepClone'
    // },
  ]
})

export default router
