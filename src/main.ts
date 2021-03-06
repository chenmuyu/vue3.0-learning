import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "bootstrap"; //引入bootstrap.js
import "bootstrap/dist/css/bootstrap.css";
const app = createApp(App);
import { axios } from "@/utils/axios";
app.config.globalProperties.$axios = axios;
app
  .use(store)
  .use(router)
  .mount("#app");

app.config.errorHandler = (err, vm, info) => {
  console.log("err");
  console.log(err);
  console.log(vm);
  console.log(info);
  console.log("err");
  // 处理错误
  // `info` 是 Vue 特定的错误信息，比如错误所在的生命周期钩子
};
