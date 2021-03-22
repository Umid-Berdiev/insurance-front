<template>
  <a-select v-model:value="$i18n.locale">
    <a-select-option
      v-for="(lang, i) in langs"
      :key="`lang.name-${i}`"
      :value="lang.name"
    >
      <img :src="lang.icon" width="25" />
    </a-select-option>
  </a-select>
</template>

<script>
import { defineComponent } from "vue";
import uzIcon from "../assets/uz.png";
import ruIcon from "../assets/ru.png";

export default defineComponent({
  setup() {
    const focus = () => {
      console.log("focus");
    };

    const langs = [
      { name: "uz", icon: uzIcon },
      { name: "ru", icon: ruIcon },
    ];

    const handleChange = (value) => {
      console.log(`selected ${value}`);
    };

    return {
      focus,
      handleChange,
      langs,
    };
  },
});
</script>

<style scoped></style>
