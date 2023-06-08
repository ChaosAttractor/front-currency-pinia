import Vue from 'vue';
import { createPinia, PiniaVuePlugin } from 'pinia';

import App from './App.vue';
import router from './router';
import vuetify from './plugins/vuetify';
import './assets/style.css';
import i18n from './i18n';

Vue.use(PiniaVuePlugin);
// todo pinia
const pinia = createPinia();

Vue.config.productionTip = false;

new Vue({
  router,
  vuetify,
  pinia,
  i18n,
  render: (h) => h(App),
}).$mount('#app');
