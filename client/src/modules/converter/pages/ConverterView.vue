<template>
  <div class="container">
    <div class="d-flex flex-center money">
      <v-text-field
        :label="$t('exchange.money', { num: 1 })"
        v-model="stateConverterStore.firstValute"
      ></v-text-field>
      <v-select
        :items="currencyStore.currencyName"
        v-model="stateConverterStore.firstValuteAbbr"
      ></v-select>
    </div>
    <div class="d-flex flex-center money">
      <v-text-field
        :label="$t('exchange.money', { num: 2 })"
        :hint="$t('exchange.hint')"
        readonly
        v-model="gettterConverter.result"
      ></v-text-field>
      <v-select
        :items="currencyStore.currencyName"
        v-model="stateConverterStore.secondValuteAbbr"
      ></v-select>
    </div>
  </div>
</template>

<script>
import { useCurrencyStore } from '@/store/currencyStore';
import { useStateConverterStore } from '@/store/converterStore/stateConverter';
import { useGetterConverterStore } from '@/store/converterStore/getterConverter';
export default {
  name: 'ConverterView',
  data() {
    return {
      stateConverterStore: useStateConverterStore(),
      currencyStore: useCurrencyStore(),
      gettterConverter: useGetterConverterStore(),
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

.money {
  width: 200px;
}

@media (max-width: 600px) {
  .container {
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    gap: 10px;
  }
}
</style>
