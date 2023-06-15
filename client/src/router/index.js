import Vue from 'vue';
import VueRouter from 'vue-router';
import Main from '@/layout/Main.vue';
import CurrencyView from '@/modules/currency/pages/CurrencyView.vue';
import ConverterView from '@/modules/converter/pages/ConverterView.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '',
    component: Main,
    children: [
      {
        path: '/',
        name: 'currency',
        component: CurrencyView,
      },
      {
        path: '/converter',
        name: 'converter',
        component: ConverterView,
      },
      {
        path: '*',
        name: 'currencyRedirect',
        component: CurrencyView,
      },
    ],
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
