<template>
  <a-layout-header class="header">
    <div class="logo" />
    <a-menu
      theme="dark"
      mode="horizontal"
      v-model:selectedKeys="selectedKeys1"
      :style="{ lineHeight: '64px' }"
    >
      <a-menu-item key="1">
        <router-link to="/">Home</router-link>
      </a-menu-item>
      <a-menu-item key="2">
        <router-link to="/posts">Posts</router-link>
      </a-menu-item>
      <a-menu-item key="3">
        <router-link to="/questions">Questions</router-link>
      </a-menu-item>
    </a-menu>
  </a-layout-header>
</template>

<script>
import { defineComponent, ref } from "vue";
export default defineComponent({
  setup() {
    return {
      selectedKeys1: ref(["1"]),
    };
  },
});
</script>

<style></style>
