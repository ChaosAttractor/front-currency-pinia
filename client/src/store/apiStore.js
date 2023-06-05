import { defineStore } from "pinia";
import axios from "../axios";
export const useApiStore = defineStore("api", {
  state: () => ({
    currency: [],
  }),
  getters: {},
  actions: {
    async getCurrency() {
      await axios.get("/currency").then((res) => (this.currency = res.data));
    },
  },
});
