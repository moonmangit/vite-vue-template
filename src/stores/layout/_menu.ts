// for demo, you can replace it with your actual menu data
export const STATIC_MENUS = [
  // home
  {
    title: 'Home',
    icon: 'mdi-home',
    path: '/',
  },
  // dashboard
  {
    title: 'Dashboard',
    icon: 'mdi-view-dashboard',
    path: '/dashboard',
  },
  // user group
  {
    title: 'User Management',
    icon: 'mdi-account-group',
    children: [
      { title: 'Users List', icon: 'mdi-account-details', path: '/users/list' },
      {
        title: 'Roles & Permissions',
        icon: 'mdi-shield-check',
        path: '/users/roles',
      },
      { title: 'Activity Logs', icon: 'mdi-history', path: '/users/logs' },
      {
        title: 'User Settings',
        icon: 'mdi-account-cog',
        children: [
          {
            title: 'Profile',
            icon: 'mdi-account',
            path: '/users/settings/profile',
          },
          {
            title: 'Security',
            icon: 'mdi-shield-lock',
            path: '/users/settings/security',
          },
        ],
      },
    ],
  },
  // order group
  {
    title: 'Orders',
    icon: 'mdi-cart',
    children: [
      {
        title: 'All Orders',
        icon: 'mdi-format-list-bulleted',
        path: '/orders/all',
      },
      { title: 'Pending', icon: 'mdi-clock-outline', path: '/orders/pending' },
      {
        title: 'Invoices',
        icon: 'mdi-file-document-outline',
        path: '/orders/invoices',
      },
    ],
  },
  // setting group
  {
    title: 'Settings',
    icon: 'mdi-cog',
    children: [
      { title: 'Profile', icon: 'mdi-account-cog', path: '/settings/profile' },
      {
        title: 'App Configuration',
        icon: 'mdi-tune',
        path: '/settings/config',
      },
      {
        title: 'Notifications',
        icon: 'mdi-bell-cog',
        path: '/settings/notifications',
      },
    ],
  },
] satisfies Menu;

export type { MenuItem, MenuGroup, Menu };
type MenuBase = {
  title: string;
  icon: string;
};
type MenuItem = MenuBase & {
  path: string;
};
type MenuGroup = MenuBase & {
  children: Array<MenuItem | MenuGroup>;
};
type Menu = Array<MenuItem | MenuGroup>;
