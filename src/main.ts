import { createApp } from 'vue';
import App from './App.vue';
import PrimeVue from 'primevue/config';
import 'primevue/resources/themes/saga-blue/theme.css';
import 'primevue/resources/primevue.css';
import 'primeicons/primeicons.css';
import i18n from './i18n';
import Sidebar from 'primevue/sidebar';

import SelectButton from 'primevue/selectbutton';

const app = createApp(App).use(i18n);

app.use(PrimeVue, {ripple: true});

app.component('SelectButton', SelectButton);

app.component('Sidebar', Sidebar);

app.mount('#app');