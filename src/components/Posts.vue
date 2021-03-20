<template>
  <a-row :gutter="[24, 24]">
    <a-col :span="6">
      <sidebar />
    </a-col>
    <a-col :span="18">
      <h1>Posts</h1>
    </a-col>
  </a-row>
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
