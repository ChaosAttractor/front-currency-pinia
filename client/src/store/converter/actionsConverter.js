import { defineStore } from 'pinia';
import { useStateCurrencyStore } from '@/store/currency/stateCurrency';

export const useActionsConverterStore = defineStore('actionsConverter', {
  actions: {
    findValue(abbr) {
      const stateCurrency = useStateCurrencyStore();
      return stateCurrency.$state.currency.find((el) => el.CharCode === abbr);
    },
  },
});
