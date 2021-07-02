<template>
  <div class="description">
    <h1>Vite + TypeScript + Vueサンプル</h1>
    <p>
      Vite + TypeScript + Vue（+ VueRouter & Vuex）のサンプルです。 Viteの標準テンプレートでvue-ts（Vue +
      TypeScript）を選択した上で、 VueRouterとVuexを後から追加しています。
    </p>
    <p>
      このサンプルではVueRouterを使ってHomeとAboutの1ページを切り替え、
      各ページでVuexストアを使ったカウンターの表示・操作が行えます。
    </p>
  </div>

  <header>
    <!-- ページを切り替えるリンク -->
    <nav>
      <ul>
        <li :class="{ selected: currentPage === 'home' }">
          <a href="#/">HOME</a>
        </li>
        <li :class="{ selected: currentPage === 'about' }">
          <a href="#/about">ABOUT</a>
        </li>
      </ul>
    </nav>
    <div class="resetCount">
      <button @click="reset">すべてのカウントをリセット</button>
    </div>
  </header>

  <!-- VueRouterで切り替える部分 -->
  <div class="pageArea">
    <routerView />
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import { useRoute } from 'vue-router'
import { useRootStore } from './store'

export default defineComponent({
  setup() {
    const store = useRootStore()
    const reset = () => {
      store.dispatch('reset')
    }

    const route = useRoute()
    const currentPage = computed(() => route.name)

    return { reset, currentPage }
  }
})
</script>

<style lang="scss">
// SCSSを利用するためにsassのインストールを行う必要があります
// npm i -D sass

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
h1,
h2 {
  margin: 0;
  padding: 10px;
}
header {
  padding: 30px;
}
nav {
  ul {
    list-style-type: none;
    display: flex;
    justify-content: center;
    padding: 0;
    li {
      border: 1px solid #2c3e50;
      width: 120px;
      height: 24px;
      font-size: 16px;
      font-weight: bold;
      &.selected {
        background-color: #2c3e50;
        color: #fff;
      }
      a {
        color: inherit;
      }
    }
  }
}
.description {
  padding: 10px 30px;
}
.pageArea {
  border: 1px solid #2c3e50;
  padding: 30px;
}
</style>
