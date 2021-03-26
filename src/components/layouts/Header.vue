<template>
  <a-layout-header class="header">
    <!-- <div class="logo" /> -->
    <a-row type="flex">
      <a-col flex="auto">
        <a-menu
          mode="horizontal"
          v-model:selectedKeys="selectedKeys1"
          :style="{ lineHeight: '64px', width: '50%' }"
        >
          <a-menu-item key="1">
            <router-link to="/">{{ $t("about-us") }}</router-link>
          </a-menu-item>
          <a-menu-item key="2">
            <router-link to="/posts" class="text-capitalize">{{
              $tc("post", 2)
            }}</router-link>
          </a-menu-item>
          <a-menu-item key="3">
            <router-link to="/questions" class="text-capitalize">{{
              $tc("test", 2)
            }}</router-link>
          </a-menu-item>
          <!-- <a-menu-item key="4">
            <router-link to="/login">Login</router-link>
          </a-menu-item> -->
        </a-menu>
      </a-col>
      <a-col class="ml-auto">
        <a-button
          class="text-capitalize"
          type="danger"
          @click="logout()"
          v-if="isLogged"
        >
          {{ $t("logout") }}
        </a-button>
        <a-button class="text-capitalize" type="primary" v-else>
          <router-link to="/login">{{ $t("login") }}</router-link>
        </a-button>
        <switch-language />
      </a-col>
    </a-row>
  </a-layout-header>
</template>

<script>
import { defineComponent, ref, computed } from "vue";
import SwitchLanguage from "../SwitchLanguage.vue";
import { mapActions, useStore } from "vuex";

export default defineComponent({
  components: { SwitchLanguage },
  setup() {
    const store = useStore();

    const isLogged = computed(() => store.getters.isLogged);

    const logout = () => store.dispatch("logout");

    return {
      selectedKeys1: ref(["1"]),
      isLogged,
      logout,
    };
  },
  methods: {
    ...mapActions(["logout"]),
  },
});
</script>

<style scoped>
.header {
  background-color: white;
}
</style>
