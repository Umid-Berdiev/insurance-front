import { createApp } from "vue";
import Antd from "ant-design-vue";

import store from "./store/index";
import router from "./routes.js";
import App from "./App.vue";

import "ant-design-vue/dist/antd.css";

const app = createApp(App);
app.config.productionTip = false;

app.use(Antd);
app.use(router);
app.use(store);
app.mount("#app");
