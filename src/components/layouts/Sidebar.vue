<template>
  <a-layout-sider theme="light">
    <a-menu mode="vertical">
      <a-menu-item
        v-for="post in posts"
        :key="post.id"
        v-text="post.title_uz"
      />
    </a-menu>
  </a-layout-sider>
</template>

<script>
import { defineComponent, computed } from "vue";
import { useStore } from "vuex";
import { useI18n } from "vue-i18n";

export default defineComponent({
  setup() {
    const store = useStore();

    // const localeTitle = computed(() => "title_" + local.value);
    store.dispatch("fetchPosts");

    const posts = computed(() => store.getters.getPosts);
    return { posts };
  },
});
</script>

<style scoped></style>
