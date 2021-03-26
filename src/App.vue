<template>
  <a-layout>
    <div class="loader" v-show="loadingState">
      <ring-loader
        class="loader"
        :loading="loading"
        :color="color"
        :size="size"
      ></ring-loader>
    </div>
    <Header />
    <a-layout class="content">
      <router-view />
    </a-layout>
  </a-layout>
</template>

<script>
import { computed, defineComponent } from "vue";
import { useStore } from "vuex";
import axios from "axios";
import RingLoader from "vue-spinner/src/RingLoader.vue";

import Header from "./components/layouts/Header.vue";
import Sidebar from "./components/layouts/Sidebar.vue";

export default defineComponent({
  components: {
    Header,
    Sidebar,
    RingLoader,
  },

  setup() {
    const store = useStore();
    const userInfo = localStorage.getItem("user");
    if (userInfo) {
      const userData = JSON.parse(userInfo);
      store.commit("setUserData", userData);
    }
    const loadingState = computed(() => store.getters.loadingState);

    axios.interceptors.response.use(
      (response) => response,
      (error) => {
        if (error.response.status === 401) {
          store.dispatch("logout");
        }
        return Promise.reject(error);
      }
    );

    return {
      loadingState,
    };
  },
});
</script>

<style scoped>
.content {
  /* position: relative; */
  min-height: 85vh;
}
.loader {
  width: 100vw;
  height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.1);
  position: absolute;
  z-index: 5;
}
</style>
