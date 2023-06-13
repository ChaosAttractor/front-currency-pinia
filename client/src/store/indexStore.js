import { defineStore } from 'pinia';
import { useApiStore } from '@/store/currencyStore';

export const useIndexStore = defineStore('index', {
  actions: {
    async getCur() {
      const apiStore = useApiStore();
      await apiStore.getCurrency();
    },
  },
});
