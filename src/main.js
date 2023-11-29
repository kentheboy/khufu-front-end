import { createApp } from 'vue'
import App from './App.vue'
import router from './routers';
import globalCss from "./global.scss";
import store from './store';

import PrimeVue from 'primevue/config';
import "primevue/resources/themes/saga-blue/theme.css"; //theme
import "primevue/resources/primevue.min.css"; //core CSS
import "primeicons/primeicons.css"; //icons
import "./primevue-custom.scss";

createApp(App)
    .use(router, globalCss)
    .use(store)
    .use(PrimeVue)
    .mount('#app')
