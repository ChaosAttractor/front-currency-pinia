import { defineStore } from 'pinia';
import { useCurrencyStore } from '@/store/currencyStore';

export const useActionsConverterStore = defineStore('actionsConverter', {
  actions: {
    findValuteValue(abbr) {
      const currencyStore = useCurrencyStore();
      return currencyStore.currency.find((el) => el.CharCode === abbr);
    },
  },
});
