<template>
  <div>
    {{ currencyStore.getterCurrency }}
    <v-data-table
      :headers="headers"
      :items="currencyStore.currency"
      :items-per-page="-1"
      :calculate-widths="true"
    >
      <!--      eslint-disable-next-line-->
      <template v-slot:item.Value="{ item }">
        <div class="flex flex-center gap-5px">
          {{ item.Value.toFixed(2) }}
          <Stonks :value="item.Value" :previous="item.Previous" />
        </div>
      </template>
    </v-data-table>
  </div>
</template>

<script>
import { useApiStore } from '@/store/apiStore';
import { useCurrencyStore } from '@/store/currencyStore';
import Stonks from '@/components/Stonks.vue';
import { headers } from '@/modules/table/entities/headers';
export default {
  name: 'CurrencyView',

  components: { Stonks },
  data() {
    return {
      headers: headers,
      apiStore: useApiStore(),
      currencyStore: useCurrencyStore(),
    };
  },
};
</script>

<style scoped>
.table-text-center {
  text-align: center;
}
</style>
