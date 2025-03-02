import { createWebHashHistory, createRouter } from 'vue-router'

import ArticleList from './components/ArticleList.vue'
import HomePage from './components/HomePage.vue'
import DetailPage from './components/DetailPage.vue'
import Author from './components/AuthorSection.vue'
import Comment from './components/CommentSection.vue'

const routes = [
  {
    path: '/List',
    component: ArticleList,
  },
  {
    path: '/detail/:id',
    component: DetailPage,
    children: [
      {
        path: 'author',
        component: Author,
      },
      {
        path: 'comment',
        component: Comment,
      },
    ],
  },
  {
    path: '/',
    component: HomePage,
  },
  {
    path: '/:anything(.*)',
    component: HomePage,
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
