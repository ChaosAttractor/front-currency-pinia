import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store/apiStore";
import vuetify from "./plugins/vuetify";
import "./assets/style.css";
import { createPinia, PiniaVuePlugin } from "pinia";

Vue.use(PiniaVuePlugin);
const pinia = createPinia();

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  pinia,
  render: (h) => h(App),
}).$mount("#app");
