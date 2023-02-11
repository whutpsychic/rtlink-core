import { createStore } from 'vuex'

// 创建一个新的 store 实例
const store = createStore({
  state() {
    return {
      // 当前使用的语言
      language: "简体中文"
    }
  },
  mutations: {
    changeLanguage(state, lang) {
      state.language = lang
    },
    increment(state) {
      state.count++
    }
  }
})




















export default store