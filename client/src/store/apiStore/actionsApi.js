import { defineStore } from 'pinia';
import axios from '../../axios';
import { useCurrencyStore } from '@/store/currencyStore';

// todo index.store
export const useActionsApiStore = defineStore('actionsApi', {
  actions: {
    async getCurrency() {
      const currencyStore = useCurrencyStore();
      await axios.get('/currency').then((res) => {
        currencyStore.currency = res.data;
        return currencyStore.addRubToCurrency();
      });
    },
  },
});
