import { defineStore } from 'pinia';
import { useIndexStore } from '@/store/indexStore';

export const useActionsConverterStore = defineStore('actionsConverter', {
  actions: {
    findValue(abbr) {
      const store = useIndexStore();
      return store.$state.currency.find((el) => el.CharCode === abbr);
    },
  },
});
