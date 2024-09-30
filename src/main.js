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

import { createI18n } from "vue-i18n";
import ja from "./i18n/ja";
import en from "./i18n/en";
const i18n = createI18n({
    legacy: false,
    locale: "ja",
    messages: {
      ja: ja,
      en: en,
    },
  });

import ToastService from 'primevue/toastservice';

createApp(App)
    .use(router, globalCss)
    .use(store)
    .use(PrimeVue, { ripple: true })
    .use(ToastService)
    .use(i18n)
    .mount('#app')
