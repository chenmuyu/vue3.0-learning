import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import routes  from './routes'



function scrollBehavior() {
  // `to` and `from` are both route locations
  // `savedPosition` can be null if there isn't one
  console.log("sssssssss2")
}
const router = createRouter({
  // history
  history: createWebHistory(process.env.BASE_URL),
  routes,
  linkActiveClass: 'yellow',
  linkExactActiveClass: 'red',
  scrollBehavior: scrollBehavior
});

export default router;
