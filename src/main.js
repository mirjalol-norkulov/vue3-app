import { createApp } from 'vue'
import App from './App.vue'
import { router } from './router';

import ElementPlus from 'element-plus'
import { api } from '~/api'
const app = createApp(App);

app.use(router);
app.use(ElementPlus);

app.config.globalProperties = {
  $api: api
}

app.mount('#app');
