import { defineStore } from 'pinia';
export const useCurrencyStore = defineStore('currency', {
  state: () => ({
    currency: [],
  }),
  getters: {
    currencyWithoutRUB: (state) => {
      const copy = state.currency.slice(0);
      copy.pop();
      return copy;
    },
    currencyName() {
      return this.currency.map((el) => el.CharCode);
    },
  },
  actions: {
    addRubToCurrency() {
      this.currency.push({
        id: 'R1111A',
        NumCode: 1,
        CharCode: 'RUB',
        Nominal: 1,
        Name: 'Российский рубль',
        Value: 1,
        Previous: 1,
      });
      return this.currency;
    },
  },
});