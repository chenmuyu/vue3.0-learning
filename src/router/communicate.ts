import { RouteRecordRaw } from "vue-router";
const routes: Array<RouteRecordRaw> = [
  {
    path: "/parents",
    name: "parents",
    // 异步组件
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/communicate/parents.vue"),
  },
];
export default routes;
