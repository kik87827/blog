import { createWebHistory, createRouter } from 'vue-router'

import ArticleList from './components/ArticleList.vue'
import HomePage from './components/HomePage.vue'
import DetailPage from './components/DetailPage.vue'

const routes = [
  {
    path: '/List',
    component: ArticleList,
  },
  {
    path: '/home',
    component: HomePage,
  },
  {
    path: '/detail',
    component: DetailPage,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
