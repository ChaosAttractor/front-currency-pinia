import Vue from 'vue';
import App from './App.vue';
import router from './router';
import vuetify from './plugins/vuetify';
import './assets/style.css';
import { createPinia, PiniaVuePlugin } from 'pinia';
import i18n from './i18n';

Vue.use(PiniaVuePlugin);
const pinia = createPinia();

Vue.config.productionTip = false;

new Vue({
  router,
  vuetify,
  pinia,
  i18n,
  render: (h) => h(App),
}).$mount('#app');
