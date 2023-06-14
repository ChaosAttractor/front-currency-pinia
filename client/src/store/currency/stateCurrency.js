import { defineStore } from 'pinia';

export const useStateCurrencyStore = defineStore('stateCurrency', {
  state: () => ({
    currency: [],
  }),
});
