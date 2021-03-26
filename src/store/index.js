import { createStore } from "vuex";
import axios from "axios";
import postModule from "./postModule";

axios.defaults.baseURL = "http://127.0.0.1:8000/api";

// Create a new store instance.
const store = createStore({
  state() {
    return {
      user: null,
      isLoading: false,
    };
  },
  mutations: {
    setUserData(state, userData) {
      state.user = userData;
      localStorage.setItem("user", JSON.stringify(userData));
      axios.defaults.headers.common.Authorization = `Bearer ${userData.data.token}`;
    },

    clearUserData() {
      localStorage.removeItem("user");
      location.reload();
    },

    setLoading(state, payload) {
      state.isLoading = payload;
    },
  },

  actions: {
    login({ commit }, credentials) {
      commit("setLoading", true);
      axios.post("/auth/login", credentials).then(({ data }) => {
        commit("setUserData", data);
        commit("setLoading", false);
      });
    },

    logout({ commit }) {
      commit("clearUserData");
    },
  },

  getters: {
    isLogged: (state) => !!state.user,
    loadingState: (state) => state.isLoading,
  },

  modules: {
    postModule,
  },
});

export default store;
