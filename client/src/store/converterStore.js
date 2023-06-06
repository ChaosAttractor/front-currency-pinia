import { defineStore } from "pinia";
import { useCurrencyStore } from "@/store/currencyStore";

export const useConverterStore = defineStore("converter", {
  state: () => ({
    firstValute: 1,
    firstValuteAbbr: "RUB",
    secondValuteAbbr: "USD",
  }),
  getters: {
    firstValuteConverted: (state) => {
      let res = state.findValuteValue(state.firstValuteAbbr);
      return (res.Value * state.firstValute) / res.Nominal;
    },
    secondValute: (state) => {
      let res = state.findValuteValue(state.secondValuteAbbr);
      return res.Value / res.Nominal;
    },
    result() {
      return (this.firstValuteConverted / this.secondValute).toFixed(3);
    },
  },
  actions: {
    findValuteValue(abbr) {
      const currencyStore = useCurrencyStore();
      return currencyStore.currencyWithRUB.find((el) => el.CharCode === abbr);
    },
  },
});
