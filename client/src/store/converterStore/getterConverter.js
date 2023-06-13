import { defineStore } from 'pinia';
import { useCurrencyStore } from '@/store/currencyStore';
import { useStateConverterStore } from '@/store/converterStore/stateConverter';
import { useActionsConverterStore } from '@/store/converterStore/actionsConverter';

// todo
export const useGetterConverterStore = defineStore('getterConverter', {
  getters: {
    firstValuteConverted: () => {
      const stateConverter = useStateConverterStore();
      const currencyStore = useCurrencyStore();
      const actionsStore = useActionsConverterStore();
      if (currencyStore.currency.length > 0) {
        let res = actionsStore.findValuteValue(
          stateConverter.$state.firstValuteAbbr,
        );
        return (res.Value * stateConverter.$state.firstValute) / res.Nominal;
      }
    },
    secondValute: () => {
      const stateConverter = useStateConverterStore();
      const currencyStore = useCurrencyStore();
      const actionsStore = useActionsConverterStore();
      if (currencyStore.currency.length > 0) {
        let res = actionsStore.findValuteValue(
          stateConverter.$state.secondValuteAbbr,
        );
        return res.Value / res.Nominal;
      }
    },
    result() {
      const currencyStore = useCurrencyStore();
      const getterConverter = useGetterConverterStore();

      if (currencyStore.currency.length > 0) {
        return (
          getterConverter.firstValuteConverted / getterConverter.secondValute
        ).toFixed(3);
      }
    },
  },
});
