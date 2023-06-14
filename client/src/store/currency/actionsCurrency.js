import { defineStore } from 'pinia';
import { useStateCurrencyStore } from '@/store/currency/stateCurrency';
import axios from '@/axios';

export const useActionsCurrencyStore = defineStore('actionsCurrency', {
  actions: {
    addRubToCurrency() {
      const stateCurrency = useStateCurrencyStore();
      stateCurrency.$state.currency.push({
        id: 'R1111A',
        NumCode: 1,
        CharCode: 'RUB',
        Nominal: 1,
        Name: 'Российский рубль',
        Value: 1,
        Previous: 1,
      });
    },
    async getCurrency() {
      const stateCurrency = useStateCurrencyStore();
      await axios.get('/currency').then((res) => {
        stateCurrency.$state.currency = res.data;
        return this.addRubToCurrency();
      });
    },
  },
});
