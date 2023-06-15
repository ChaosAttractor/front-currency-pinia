import { defineStore } from 'pinia';
import { useIndexStore } from '@/store/indexStore';

export const useGetterCurrencyStore = defineStore('getterCurrency', {
  getters: {
    currencyWithoutRUB() {
      const store = useIndexStore();
      const copy = store.$state.currency.slice(0);
      copy.pop();
      return copy;
    },
    currencyName() {
      const store = useIndexStore();
      return store.$state.currency.map((el) => el.CharCode);
    },
  },
});
