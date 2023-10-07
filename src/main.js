import { createApp } from 'vue'
import App from './App.vue'
import router from './routers';
import globalCss from "./global.scss";

createApp(App)
    .use(router, globalCss)
    .mount('#app')
