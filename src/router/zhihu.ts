import { RouteRecordRaw } from "vue-router";
const routes: Array<RouteRecordRaw> = [
  {
    path: "/zhihu/recommend",
    name: "recommend",
    component: () => import("../views/zhihu/Home.vue"),
  },
  {
    path: "/zhihu/recommend/recommendDetail",
    name: "recommendDetail",
    component: () => import("../views/zhihu/Detail.vue"),
  },
  {
    path: "/zhihu/recommend/recommendDetail/articleDetail",
    name: "articleDetail",
    component: () => import("../views/zhihu/articleDetail.vue"),
  },
];

export default routes;
