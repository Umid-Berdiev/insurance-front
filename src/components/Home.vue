<template>
  <div>Welcome to Insurance Posts from Ilyos Abdurahmonov</div>
  <h3>{{ currentCount }}</h3>
  <button @click="increment">+</button>
  <button @click="decrement">-</button>
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
  methods: {
    ...mapMutations(["increment", "decrement"]),
  },
};
</script>

<style></style>
