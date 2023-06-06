import { defineStore } from 'pinia';
export const useCurrencyStore = defineStore('currency', {
  state: () => ({
    currency: [],
  }),
  getters: {
    // todo тригерить aciton при успешном получении api, сделать getter без RUB для таблицы
    currencyWithRUB: (state) => {
      const copy = state.currency.slice(0);
      copy.push({
        id: 'R1111A',
        NumCode: 1,
        CharCode: 'RUB',
        Nominal: 1,
        Name: 'Российский рубль',
        Value: 1,
        Previous: 1,
      });
      return copy;
    },
    currencyName() {
      return this.currencyWithRUB.map((el) => el.CharCode);
    },
  },
});
