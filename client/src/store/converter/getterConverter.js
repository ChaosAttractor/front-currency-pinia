import { defineStore } from 'pinia';
import { useStateConverterStore } from '@/store/converter/stateConverter';
import { useActionsConverterStore } from '@/store/converter/actionsConverter';
import { useIndexStore } from '@/store/indexStore';

export const useGetterConverterStore = defineStore('getterConverter', {
  getters: {
    firstValueConverted: () => {
      const stateConverter = useStateConverterStore();
      const store = useIndexStore();
      const actionsConverter = useActionsConverterStore();

      if (store.$state.currency.length > 0) {
        let res = actionsConverter.findValue(
          stateConverter.$state.firstValueAbbr,
        );
        return (res.Value * stateConverter.$state.firstValue) / res.Nominal;
      }
    },
    secondValue: () => {
      const stateConverter = useStateConverterStore();
      const store = useIndexStore();
      const actionsConverter = useActionsConverterStore();
      if (store.currency.length > 0) {
        let res = actionsConverter.findValue(
          stateConverter.$state.secondValueAbbr,
        );
        return res.Value / res.Nominal;
      }
    },
    result() {
      const store = useIndexStore();
      const getterConverter = useGetterConverterStore();

      if (store.currency.length > 0) {
        return (
          getterConverter.firstValueConverted / getterConverter.secondValue
        ).toFixed(3);
      }
    },
  },
});
