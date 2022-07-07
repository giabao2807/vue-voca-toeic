import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    sampleBlogCards: [
      {
        blogTitle: "Blog Card 01",
        blogCoverPhoto: "stock-1",
        blogDate: "July 28,2001",
      },
      {
        blogTitle: "Blog Card 02",
        blogCoverPhoto: "stock-2",
        blogDate: "July 28,2001",
      },
      {
        blogTitle: "Blog Card 03",
        blogCoverPhoto: "stock-3",
        blogDate: "July 28,2001",
      },
      {
        blogTitle: "Blog Card 04",
        blogCoverPhoto: "stock-4",
        blogDate: "July 28,2001",
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
