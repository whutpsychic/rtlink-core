import { createStore } from 'vuex'

// 创建一个新的 store 实例
const store = createStore({
  state() {
    return {
      // 当前使用的语言
      language: "简体中文",
      // 是否开启黑夜模式
      nightMode: false,
    }
  },
  mutations: {
    changeLanguage(state, lang) {
      state.language = lang
    },
    toggleViewMode(state, mode) {
      state.nightMode = mode
    }
  }
})








export default store