import { createStore, useStore } from 'vuex'

// 2つのカウンタを持つごく簡単なストアのサンプルです。

// ストアの型
type State = {
  /** 「Home」のカウント */
  countHome: number
  /** 「About」のカウント */
  countAbout: number
}

// ストアを作成
// main.tsで利用するため、exportする
export const store = createStore<State>({
  state: {
    countHome: 0,
    countAbout: 0
  },
  mutations: {
    /** 「Home」のカウントを変更 */
    setCountHome(state, payload) {
      state.countHome = payload
    },
    /** 「About」のカウントを変更 */
    setCountAbout(state, payload) {
      state.countAbout = payload
    }
  },
  actions: {
    /** 「Home」のカウントを+1 */
    addCountHome({ commit, state }) {
      commit('setCountHome', state.countHome + 1)
    },
    /** 「About」のカウントを+1 */
    addCountAbout({ commit, state }) {
      commit('setCountAbout', state.countAbout + 1)
    },
    /** すべてのカウントをリセット */
    reset({ commit }) {
      commit('setCountHome', 0)
      commit('setCountAbout', 0)
    }
  }
})

// 各ページ・コンポーネントからストアを利用するためのショートカット
export const useRootStore = () => useStore<State>()
