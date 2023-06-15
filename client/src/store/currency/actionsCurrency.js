import { defineStore } from 'pinia';
import axios from '@/axios';
import { useIndexStore } from '@/store/indexStore';

export const useActionsCurrencyStore = defineStore('actionsCurrency', {
  actions: {
    addRubToCurrency() {
      const store = useIndexStore();
      store.$state.currency.push({
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
      const store = useIndexStore();
      await axios.get('/currency').then((res) => {
        store.$state.currency = res.data;
        return this.addRubToCurrency();
      });
    },
  },
});
