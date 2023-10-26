import { createApp } from 'vue'
import App from './App.vue'
import router from './routers';
import globalCss from "./global.scss";
import { PrimeVue } from 'primevue/config';

createApp(App)
    .use(router, globalCss, PrimeVue)
    .mount('#app')
