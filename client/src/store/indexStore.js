import { defineStore } from 'pinia';
import { useActionsCurrencyStore } from '@/store/currency/actionsCurrency';
import { useGetterCurrencyStore } from '@/store/currency/getterCurrency';
import { useStateConverterStore } from '@/store/converter/stateConverter';
import { useGetterConverterStore } from '@/store/converter/getterConverter';

/*
  converter getter readonly их нельзя изменить,
  можно написать костыль, в угоду того,
  что нужно сделать меньше импортов и пользоваться 1 сторой в приложении,
  но со стороны написания, не очень приятно делать мешанину тут
 */

// todo сделать следующие
// todo разделить каждый на свои store
export const useIndexStore = defineStore('store', {
  state: () => ({
    currency: [],
    firstValue: useStateConverterStore().firstValue,
    firstValueAbbr: useStateConverterStore().firstValueAbbr,
    secondValueAbbr: useStateConverterStore().secondValueAbbr,
  }),
  getters: {
    currencyWithoutRUB() {
      const getterCurrency = useGetterCurrencyStore();
      return getterCurrency.currencyWithoutRUB;
    },
    currencyName() {
      const getterCurrency = useGetterCurrencyStore();
      return getterCurrency.currencyName;
    },
    result() {
      const getterConverter = useGetterConverterStore();
      return getterConverter.result;
    },
  },
  actions: {
    getCurrency() {
      const actionsCurrency = useActionsCurrencyStore();
      actionsCurrency.getCurrency();
    },
    changeFirstValue() {
      const stateConverter = useStateConverterStore();
      const store = useIndexStore();
      stateConverter.$state.firstValue = store.firstValue;
    },
    changeFirstValueAbbr() {
      const stateConverter = useStateConverterStore();
      const store = useIndexStore();
      stateConverter.$state.firstValueAbbr = store.firstValueAbbr;
    },
    changeSecondValueAbbr() {
      const stateConverter = useStateConverterStore();
      const store = useIndexStore();
      stateConverter.$state.secondValueAbbr = store.secondValueAbbr;
    },
  },
});
