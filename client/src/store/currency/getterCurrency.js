import { defineStore } from 'pinia';
import { useStateCurrencyStore } from '@/store/currency/stateCurrency';

export const useGetterCurrencyStore = defineStore('getterCurrency', {
  getters: {
    currencyWithoutRUB() {
      const stateCurrency = useStateCurrencyStore();
      const copy = stateCurrency.$state.currency.slice(0);
      copy.pop();
      return copy;
    },
    currencyName() {
      const stateCurrency = useStateCurrencyStore();
      return stateCurrency.$state.currency.map((el) => el.CharCode);
    },
  },
});
