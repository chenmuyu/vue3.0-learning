import { RouteRecordRaw } from "vue-router";
import Home from "../views/Home.vue";
const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    // 同步组件
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // 异步组件
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/login",
    name: "login",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // 异步组件
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Login.vue"),
  },
  {
    path: "/register",
    name: "register",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // 异步组件
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Register.vue"),
  },
  {
    path: "/root",
    name: "Root",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/routePlay/root.vue"),
    children: [
      {
        path: "firstSon",
        name: "firstSon",
        // 异步组件
        component: () =>
          import(
            /* webpackChunkName: "about" */ "../views/routePlay/firstSon.vue"
          ),
        children: [
          {
            path: "sonson",
            name: "sonson",
            // 异步组件
            component: () =>
              import(
                /* webpackChunkName: "about" */ "../views/routePlay/sonson.vue"
              ),
          },
        ],
      },
    ],
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
  {
    path: "/useReactive",
    name: "useReactive",
    component: () =>
      import(
        /* webpackChunkName: "about" */ "../views/pratice/useReactive.vue"
      ),
  },
  {
    path: "/useWatch",
    name: "useWatch",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/pratice/useWatch.vue"),
  },
  {
    path: "/useCss",
    name: "useCss",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/pratice/useCss.vue"),
  },
];
export default routes;
