import { defineStore } from 'pinia';
import axios from '../axios';
import { useCurrencyStore } from '@/store/currencyStore';

export const useApiStore = defineStore('api', {
  actions: {
    async getCurrency() {
      const currencyStore = useCurrencyStore();
      await axios
        .get('/currency')
        .then((res) => (currencyStore.currency = res.data));
    },
  },
});
