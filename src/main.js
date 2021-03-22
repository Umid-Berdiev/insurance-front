import { createApp } from "vue";
import Antd from "ant-design-vue";

import store from "./store/index";
import router from "./routes.js";
import i18n from "./i18n/index.js";
import App from "./App.vue";

import "bootstrap/dist/css/bootstrap.min.css";
import "ant-design-vue/dist/antd.css";

const app = createApp(App);
app.config.productionTip = false;

app.use(Antd);
app.use(router);
app.use(store);
app.use(i18n);
app.mount("#app");
