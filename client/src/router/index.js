import Vue from 'vue';
import VueRouter from 'vue-router';
import Base from '@/layout/Base.vue';
import CurrencyView from '@/views/CurrencyView.vue';
import ConverterView from '@/views/ConverterView.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '',
    component: Base,
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
