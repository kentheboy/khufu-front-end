import { createApp } from 'vue'
import App from './App.vue'
import router from './routers';
import globalCss from "./global.css";

createApp(App)
    .use(router, globalCss)
    .mount('#app')
