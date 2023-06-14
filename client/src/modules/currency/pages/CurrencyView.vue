<template>
  <div>
    <v-data-table
      :headers="headers"
      :items="store.currencyWithoutRUB"
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
  </div>
</template>

<script>
import { useIndexStore } from '@/store/indexStore';
import Stonks from '../components/Stonks.vue';
import { headers } from '../entities/headers';

export default {
  name: 'CurrencyView',

  components: { Stonks },
  data() {
    return {
      store: useIndexStore(),
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
