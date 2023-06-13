<template>
  <v-data-table
    :headers="headers"
    :items="currencyStore.currencyWithoutRUB"
    :items-per-page="-1"
    :calculate-widths="true"
  >
    <template v-slot:item.Value="{ item }">
      <div class="d-flex flex-center gap-5px">
        {{ item.Value.toFixed(2) }}
        <Stonks :value="item.Value" :previous="item.Previous" />
      </div>
    </template>
  </v-data-table>
</template>

<script>
import { useCurrencyStore } from '@/store/currencyStore';
import Stonks from '../components/Stonks.vue';
import { headers } from '../entities/headers';
import { useIndexStore } from '@/store/indexStore';

export default {
  name: 'CurrencyView',

  components: { Stonks },
  data() {
    return {
      indexStore: useIndexStore(),
      currencyStore: useCurrencyStore(),
    };
  },
  computed: {
    headers() {
      return headers(this.$i18n.locale);
    },
  },
};
</script>

<style scoped>
.table-text-center {
  text-align: center;
}
</style>
