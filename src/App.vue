<template>
  <a-layout>
    <Header />
    <a-layout class="content">
      <router-view />
    </a-layout>
  </a-layout>
</template>

<script>
import { defineComponent } from "vue";
import axios from "axios";

import Header from "./components/layouts/Header.vue";
import Sidebar from "./components/layouts/Sidebar.vue";

export default defineComponent({
  components: {
    Header,
    Sidebar,
  },

  setup() {
    const userInfo = localStorage.getItem("user");
    if (userInfo) {
      const userData = JSON.parse(userInfo);
      this.$store.commit("setUserData", userData);
    }

    axios.interceptors.response.use(
      (response) => response,
      (error) => {
        if (error.response.status === 401) {
          this.$store.dispatch("logout");
        }
        return Promise.reject(error);
      }
    );

    return {
      //
    };
  },
});
</script>

<style scoped>
.content {
  min-height: 85vh;
}
</style>
