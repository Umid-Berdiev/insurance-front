<template>
  <a-layout-content>
    <h1 v-text="$t('about-us')"></h1>
  </a-layout-content>
</template>

<script>
import { computed } from "vue";
import { useStore, mapMutations } from "vuex";

export default {
  setup() {
    const store = useStore();
    const currentCount = computed(() => {
      return store.state.count;
    });

    return {
      currentCount,
    };
  },
  components: {},
  methods: {
    ...mapMutations(["increment", "decrement"]),
  },
};
</script>

<style></style>
