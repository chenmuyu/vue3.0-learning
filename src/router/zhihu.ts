import { RouteRecordRaw } from "vue-router";
const routes: Array<RouteRecordRaw> = [
  {
    path: "/zhihu/recommend",
    name: "recommend",
    component: () => import("../views/zhihu/Home.vue"),
  },
  {
    path: "/zhihu/recommendDetail",
    name: "recommendDetail",
    component: () => import("../views/zhihu/Detail.vue"),
  },
];
export default routes;
