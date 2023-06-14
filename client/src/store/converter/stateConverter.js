import { defineStore } from 'pinia';

export const useStateConverterStore = defineStore('stateConverter', {
  state: () => ({
    firstValue: 1,
    firstValueAbbr: 'RUB',
    secondValueAbbr: 'USD',
  }),
});
