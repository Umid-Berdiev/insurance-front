<template>
  <Sidebar />
  <a-layout-content>
    <h1 v-text="$tc('post', 2)" class="text-capitalize"></h1>
  </a-layout-content>
</template>

<script>
import Sidebar from "./layouts/Sidebar.vue";

export default {
  components: {
    Sidebar,
  },
  setup() {},
};
</script>

<style scoped></style>
