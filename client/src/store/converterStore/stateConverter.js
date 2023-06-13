import { defineStore } from 'pinia';

export const useStateConverterStore = defineStore('stateConverter', {
  state: () => ({
    firstValute: 1,
    firstValuteAbbr: 'RUB',
    secondValuteAbbr: 'USD',
  }),
});
