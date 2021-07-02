import { createApp } from 'vue'
import App from './App.vue'
import { router } from './router'
import { store } from './store'

createApp(App)
  .use(router) // 作成したルーターを読み込み
  .use(store) // 作成したストアを読み込み
  .mount('#app')
