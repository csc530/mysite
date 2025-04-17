// import './assets/main.css'
// import 'https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css'

import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

const app = createApp(App);

app.use(router);

app.mount('#app');
