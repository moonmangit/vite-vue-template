import {
  createRouter,
  createWebHistory,
  type RouteRecordRaw,
} from 'vue-router';
import { type AppRouteConfig } from '../../assets/libs/app-route-config';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      name: 'dashboard',
      path: '/',
      component: () => import('../pages/Dashboard.vue'),
      meta: {
        layout: 'default',
      },
    },
    {
      name: 'users',
      path: '/users',
      component: () => import('../pages/UserManagement.vue'),
      meta: {
        layout: 'default',
      },
    },
    {
      name: 'settings',
      path: '/settings',
      component: () => import('../pages/Settings.vue'),
      meta: {
        layout: 'default',
      },
    },
    {
      name: 'about',
      path: '/about',
      component: () => import('../pages/About.vue'),
      meta: {
        layout: 'default',
      },
    },
    {
      name: 'login',
      path: '/login',
      component: () => import('../pages/Login.vue'),
      meta: {
        layout: 'empty',
      },
    },
  ] as AppRouteConfig[] as RouteRecordRaw[],
});

export default router;
