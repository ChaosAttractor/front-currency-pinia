import { defineStore } from 'pinia';
import { useCurrencyStore } from '@/store/currencyStore';

// todo
export const useConverterStore = defineStore('converter', {
  state: {
    firstValute: 1,
    firstValuteAbbr: 'RUB',
    secondValuteAbbr: 'USD',
  },
  getters: {
    firstValuteConverted: (state) => {
      const currencyStore = useCurrencyStore();
      if (currencyStore.currency.length > 0) {
        let res = state.findValuteValue(state.firstValuteAbbr);
        return (res.Value * state.firstValute) / res.Nominal;
      }
    },
    secondValute: (state) => {
      const currencyStore = useCurrencyStore();
      if (currencyStore.currency.length > 0) {
        let res = state.findValuteValue(state.secondValuteAbbr);
        return res.Value / res.Nominal;
      }
    },
    result() {
      const currencyStore = useCurrencyStore();
      if (currencyStore.currency.length > 0) {
        return (this.firstValuteConverted / this.secondValute).toFixed(3);
      }
    },
  },
  actions: {
    findValuteValue(abbr) {
      const currencyStore = useCurrencyStore();
      return currencyStore.currency.find((el) => el.CharCode === abbr);
    },
  },
});
