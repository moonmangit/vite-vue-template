import { createApp } from 'vue';
import App from './App.vue';
import router from './view/router';
import { createPinia } from 'pinia';

const app = createApp(App);

// pinia
const pinia = createPinia();
app.use(pinia);

// router
app.use(router);

app.mount('#app');
