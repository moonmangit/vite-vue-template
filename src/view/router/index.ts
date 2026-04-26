import {
  createRouter,
  createWebHistory,
  type RouteRecordRaw,
} from "vue-router";
import { type AppRouteConfig } from "../../assets/libs/app-route-config";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      name: "home",
      path: "/",
      component: () => import("../pages/Home.vue"),
      meta: {
        layout: "default",
      },
    },
    {
      name: "about",
      path: "/about",
      component: () => import("../pages/About.vue"),
    },
    {
      name: "login",
      path: "/login",
      component: () => import("../pages/Login.vue"),
      meta: {
        layout: "empty",
      },
    },
  ] as AppRouteConfig[] as RouteRecordRaw[],
});

export default router;
