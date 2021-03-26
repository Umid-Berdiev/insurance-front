import axios from "axios";

axios.defaults.baseURL = "http://127.0.0.1:8000/api";

export default {
  state: {
    post: null,
    posts: null,
  },
  getters: {
    getPost: (state) => state.post,
    getPosts: (state) => state.posts,
  },
  mutations: {
    setPost(state, payload) {
      state.post = payload;
    },
    setPosts(state, payload) {
      state.posts = payload;
    },
  },
  actions: {
    async fetchPost({ commit }, payload) {
      const res = await axios.get("get-post", { params: { id: payload } });
      commit("setPost", res.data);
    },
    async fetchPosts({ commit }) {
      const res = await axios.get("get-posts");
      commit("setPosts", res.data);
    },
  },
};
