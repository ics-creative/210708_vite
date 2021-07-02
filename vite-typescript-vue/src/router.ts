import { createRouter, createWebHashHistory } from 'vue-router'
import Home from './pages/HomePage.vue'
import About from './pages/AboutPage.vue'

// ルートの定義
const routes = [
  { name: 'home', path: '/', component: Home },
  { name: 'about', path: '/about', component: About }
]

// ルーターの作成
export const router = createRouter({
  // GitHub Pages用にWebHashHistoryを使用する
  history: createWebHashHistory(),
  routes
})
