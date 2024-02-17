import { createApp } from 'vue';
import router from './router';
// css
import './assets/css/font-icon.css';
import './assets/css/font-family.css';
import './assets/css/main.css';
// components
import App from './App.vue';

createApp(App).use(router).mount('#app');