import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    vocabularyData: [
      {
        vocabulary: "Blog Card 01",
        picture: "stock-1",
        meaning: "2020-01-01",
      },
      {
        vocabulary: "Blog Card 02",
        picture: "stock-2",
        meaning: "July 28,2001",
      },
      {
        vocabulary: "Blog Card 03",
        picture: "stock-3",
        meaning: "July 28,2001",
      },
      {
        vocabulary: "Blog Card 04",
        picture: "stock-4",
        meaning: "July 28,2001",
      },
      {
        vocabulary: "Blog Card 01",
        picture: "stock-1",
        meaning: "July 28,2001",
      },
      {
        vocabulary: "Blog Card 02",
        picture: "stock-2",
        meaning: "July 28,2001",
      },
      {
        vocabulary: "Blog Card 03",
        picture: "stock-3",
        meaning: "July 28,2001",
      },
      {
        vocabulary: "Blog Card 04",
        picture: "stock-4",
        meaning: "July 28,2001",
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
