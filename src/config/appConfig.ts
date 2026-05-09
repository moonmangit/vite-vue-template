export const appConfig = {
  title: 'Modern Admin',
  logo: {
    src: '/favicon.svg',
    alt: 'Modern Admin Logo',
  },
  apiBaseUrl: import.meta.env.VITE_API_BASE_URL || 'https://api.example.com',
  theme: {
    defaultMode: 'light', // 'light' | 'dark'
    primaryColor: 'emerald',
  },
  menuItems: [
    {
      label: 'Dashboard',
      icon: 'pi pi-home',
      to: '/',
    },
    {
      label: 'User Management',
      icon: 'pi pi-users',
      to: '/users',
    },
    {
      label: 'Settings',
      icon: 'pi pi-cog',
      to: '/settings',
    },
    {
      label: 'About',
      icon: 'pi pi-info-circle',
      to: '/about',
    },
  ],
};
