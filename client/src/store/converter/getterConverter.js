import { defineStore } from 'pinia';
import { useStateConverterStore } from '@/store/converter/stateConverter';
import { useActionsConverterStore } from '@/store/converter/actionsConverter';
import { useStateCurrencyStore } from '@/store/currency/stateCurrency';

export const useGetterConverterStore = defineStore('getterConverter', {
  getters: {
    firstValueConverted: () => {
      const stateConverter = useStateConverterStore();
      const stateCurrency = useStateCurrencyStore();
      const actionsConverter = useActionsConverterStore();

      if (stateCurrency.$state.currency.length > 0) {
        let res = actionsConverter.findValue(
          stateConverter.$state.firstValueAbbr,
        );
        return (res.Value * stateConverter.$state.firstValue) / res.Nominal;
      }
    },
    secondValue: () => {
      const stateConverter = useStateConverterStore();
      const stateCurrency = useStateCurrencyStore();
      const actionsConverter = useActionsConverterStore();
      if (stateCurrency.currency.length > 0) {
        let res = actionsConverter.findValue(
          stateConverter.$state.secondValueAbbr,
        );
        return res.Value / res.Nominal;
      }
    },
    result() {
      const stateCurrency = useStateCurrencyStore();
      const getterConverter = useGetterConverterStore();

      if (stateCurrency.currency.length > 0) {
        return (
          getterConverter.firstValueConverted / getterConverter.secondValue
        ).toFixed(3);
      }
    },
  },
});
