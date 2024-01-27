import { createApp } from "vue";
import App from "./App.vue";
import ArcoVue from "@arco-design/web-vue";
import "@arco-design/web-vue/dist/arco.css";
import router from "./router";
//引入pinia仓库以及持久化
import { createPinia } from "pinia";
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";
import "@/access";
import "bytemd/dist/index.css";

const pinia = createPinia();

//注册pinia持久化插件
pinia.use(piniaPluginPersistedstate);
createApp(App).use(ArcoVue).use(pinia).use(router).mount("#app");
