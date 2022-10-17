import { createApp } from 'vue';
import App from './App.vue';
import PrimeVue from 'primevue/config';
import 'primevue/resources/themes/saga-blue/theme.css';
import 'primevue/resources/primevue.css';
import 'primeicons/primeicons.css';
import i18n from './i18n'

const app = createApp(App).use(i18n);

app.use(PrimeVue, {ripple: true});

app.mount('#app');