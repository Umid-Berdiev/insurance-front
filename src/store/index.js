import { createStore } from "vuex";
import axios from "axios";

axios.defaults.baseURL = "http://127.0.0.1:8000/api";

// Create a new store instance.
const store = createStore({
  state() {
    return {
      user: null,
    };
  },
  mutations: {
    setUserData(state, userData) {
      state.user = userData;
      localStorage.setItem("user", JSON.stringify(userData));
      axios.defaults.headers.common.Authorization = `Bearer ${userData.token}`;
    },

    clearUserData() {
      localStorage.removeItem("user");
      location.reload();
    },
  },

  actions: {
    login({ commit }, credentials) {
      return axios.post("/auth/login", credentials).then(({ data }) => {
        commit("setUserData", data);
      });
    },

    logout({ commit }) {
      commit("clearUserData");
    },
  },

  getters: {
    isLogged: (state) => !!state.user,
  },
});

export default store;
