import { createApp } from 'vue'
// import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import './assets/stylesheets/sense.css'
import './assets/cat.scss'

import { inject } from '@vercel/analytics';

const app = createApp(App)

// app.use(createPinia())
app.use(router)

inject({
    framework: 'vue'
});

app.mount('#app')
