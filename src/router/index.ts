import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import routes from "./routes";
import communicate from "./communicate";
import zhihu from "./zhihu";
function scrollBehavior() {
  // `to` and `from` are both route locations
  // `savedPosition` can be null if there isn't one
}
console.log([...routes,...communicate])
console.log(routes)
const router = createRouter({
  // history
  history: createWebHistory(process.env.BASE_URL),
  routes:[...routes,...communicate,...zhihu],
  linkActiveClass: "yellow",
  linkExactActiveClass: "red",
  scrollBehavior: scrollBehavior,
}); 

router.beforeEach((to, from) => {
  /* 路由发生变化修改页面title */
  if (to.meta && to.meta.title) {
    (document as any).title = to.meta.title;
  }
  return 
});

export default router;
