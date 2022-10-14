import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/main.css'
import PrimeVue from 'primevue/config';
import Dialog from 'primevue/dialog';
import Button from 'primevue/button';
import 'primevue/resources/themes/saga-blue/theme.css';
import 'primevue/resources/primevue.min.css';
import 'primeicons/primeicons.css';
import ProgressSpinner from 'primevue/progressspinner';

const app = createApp(App)
app.mount('#app')


app.use(PrimeVue, {ripple: true});


app.component('Dialog', Dialog);

app.component('Button', Button);

app.component('ProgressSpinner', ProgressSpinner);