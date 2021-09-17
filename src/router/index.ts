import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/Home.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/useSetup",
    name: "useSetup",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/pratice/useSetup.vue"),
  },
  {
    path: "/useAxios",
    name: "useAxios",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/pratice/useAxios.vue"),
  },
  {
    path: "/useTeleport",
    name: "useTeleport",
    component: () =>
      import(
        /* webpackChunkName: "about" */ "../views/pratice/useTeleport.vue"
      ),
  },
  {
    path: "/useSuspense",
    name: "useSuspense",
    component: () =>
      import(
        /* webpackChunkName: "about" */ "../views/pratice/useSuspense.vue"
      ),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
