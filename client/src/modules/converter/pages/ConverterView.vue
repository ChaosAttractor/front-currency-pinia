<template>
  <div class="container">
    <div class="flex flex-center valute">
      <v-text-field
        :label="$t('exchange.valute', { num: 1 })"
        v-model="converterStore.firstValute"
      ></v-text-field>
      <v-select
        :items="currencyStore.currencyName"
        v-model="converterStore.firstValuteAbbr"
      ></v-select>
    </div>
    <div class="flex flex-center valute">
      <v-text-field
        :label="$t('exchange.valute', { num: 2 })"
        :hint="$t('exchange.hint')"
        readonly
        v-model="converterStore.result"
      ></v-text-field>
      <v-select
        :items="currencyStore.currencyName"
        v-model="converterStore.secondValuteAbbr"
      ></v-select>
    </div>
  </div>
</template>

<script>
import { useCurrencyStore } from '@/store/currencyStore';
import { useConverterStore } from '@/store/converterStore';
export default {
  name: 'ConverterView',
  data() {
    return {
      currencyStore: useCurrencyStore(),
      converterStore: useConverterStore(),
    };
  },
};
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  margin-top: 30px;
  gap: 30px;
}

.valute {
  width: 200px;
}

.v-input {
  width: 150px;
}

.v-select {
  width: 100px;
}

@media (max-width: 500px) {
  .container {
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    gap: 10px;
  }

  .v-input {
    font-size: 20px;
  }

  .v-select {
    width: 100px;
    font-size: 20px;
  }
}
</style>
