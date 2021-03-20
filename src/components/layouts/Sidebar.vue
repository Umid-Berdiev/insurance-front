<template>
  <!-- <a-layout-sider width="200" style="background: #fff"> -->
  <a-menu
    mode="inline"
    v-model:selectedKeys="selectedKeys1"
    v-model:openKeys="openKeys"
    :style="{ height: '100%', borderRight: 0 }"
  >
    <a-menu-item key="1">option1</a-menu-item>
    <a-menu-item key="2">option2</a-menu-item>
    <a-menu-item key="3">option3</a-menu-item>
    <a-menu-item key="4">option4</a-menu-item>
  </a-menu>
  <!-- </a-layout-sider> -->
</template>

<script>
import { defineComponent, ref } from "vue";
import {
  UserOutlined,
  LaptopOutlined,
  NotificationOutlined,
} from "@ant-design/icons-vue";

export default defineComponent({
  components: {
    UserOutlined,
    LaptopOutlined,
    NotificationOutlined,
  },
  setup() {
    return {
      selectedKeys2: ref(["2"]),
      collapsed: ref(false),
      openKeys: ref(["sub1"]),
    };
  },
});
</script>

<style scoped></style>
