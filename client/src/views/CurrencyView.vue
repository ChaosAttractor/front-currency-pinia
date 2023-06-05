<template>
  <div>
    <v-simple-table fixed-header height="900px">
      <template v-slot:default>
        <thead>
          <tr>
            <th v-for="header in headers" :key="header" class="text-center">
              {{ header }}
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in apiStore.currency" :key="item.NumCode">
            <td class="table-text-center">{{ item.NumCode }}</td>
            <td class="table-text-center">{{ item.CharCode }}</td>
            <td class="table-text-center">{{ item.Nominal }}</td>
            <td class="table-text-center">{{ item.Name }}</td>
            <td class="flex flex-center gap-5px">
              <!-- todo сделать гетером в сторе -->
              {{ item.Value.toFixed(2) }}
              <Stonks :value="item.Value" :previous="item.Previous" />
            </td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
  </div>
</template>

<script>
import { useApiStore } from "@/store/apiStore";
import Stonks from "@/components/Stonks.vue";

export default {
  name: "CurrencyView",

  components: { Stonks },
  data() {
    return {
      headers: ["Цифр. код", "Бук. код", "Единиц", "Валюта", "Курс"],
      apiStore: useApiStore(),
    };
  },
  mounted() {
    this.apiStore.getCurrency();
  },
};
</script>

<style>
.table-text-center {
  text-align: center;
}
</style>
