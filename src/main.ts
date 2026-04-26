import { createApp } from 'vue';
import App from './App.vue';
import router from './view/router';
import { createPinia } from 'pinia';
import { createI18n } from 'vue-i18n';
import en from './assets/locales/en.json';
import th from './assets/locales/th.json';

const app = createApp(App);

// i18n
const i18n = createI18n({
  locale: 'en',
  fallbackLocale: 'en',
  messages: {
    en,
    th,
  },
});
app.use(i18n);

// pinia
const pinia = createPinia();
app.use(pinia);

// router
app.use(router);

app.mount('#app');
