import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    vocabularyData: [
      {
        vocabulary: "Practically ~ alomost",
        picture: "1",
        meaning: "hầu hết",
      },
      {
        vocabulary: "Neglect to ~ to not to do sth",
        picture: "2",
        meaning: "quên, bỏ qua làm gì đó",
      },
      {
        vocabulary: "Productive",
        picture: "3",
        meaning: "năng suất, hữu ích",
      },
      {
        vocabulary: "Acquires ~ buy sth from",
        picture: "4",
        meaning: "mua lại, có được",
      },
      {
        vocabulary: "Pertinent to",
        picture: "5",
        meaning: "thích hợp",
      },
      {
        vocabulary: "Simultaneous ~ at the same time",
        picture: "stock-1",
        meaning: "đồng thời, cùng lúc",
      },
      {
        vocabulary: "Notwithstanding",
        picture: "stock-1",
        meaning: "mặc dù",
      },
      {
        vocabulary: "Consistently",
        picture: "6",
        meaning: "nhất quán",
      },
    ],
    editPost: null,
  },
  mutations: {
    toggleEditPost(state, payload) {
      state.editPost = payload;
    }
  },
  actions: {
  },
  modules: {
  }
})
