import { RouteRecordRaw } from "vue-router";
import Home from "../views/Home.vue";
const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    redirect: "Home",
  },
  {
    path: "/redirtparams",
    redirect: {
      name: "Home",
      query: {
        from: "redirect",
      },
    },
  },
  {
    path: "/function",
    redirect: () => {
      // LOGIN_INFO是当前用户的登录信息，你可以从localStorage或者Vuex读取
      // const GROUP_ID: number = LOGIN_INFO.groupId;

      // 根据组别id进行跳转
      switch (1) {
        // 管理员，跳去仪表盘
        case 1:
          return "/about";

        // 普通用户，跳去首页
        // case 2:
        //   return "/home";

        // 其他都认为未登录，跳去登录页
        default:
          return "/login";
      }
    },
  },
  {
    path: "/Home",
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
            path: "sonson/:id",
            name: "sonson",
            // 异步组件
            component: () =>
              import(
                /* webpackChunkName: "about" */ "../views/routePlay/sonson.vue"
              ),
            meta: {
              title: "登录",
              isDisableBreadcrumbLink: true,
              isShowBreadcrumb: false,
              addToSidebar: false,
              sidebarIcon: "",
              sidebarIconAlt: "",
              isNoLogin: true,
            },
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
  {
    path: "/:pathMatch(.*)*",
    name: "404",
    component: () => import(/* webpackChunkName: "404" */ "../views/404.vue"),
    meta: {
      title: "404",
    },
  },
];
export default routes;
