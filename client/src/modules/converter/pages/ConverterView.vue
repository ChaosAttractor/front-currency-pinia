<template>
  <div class="container">
    <div class="d-flex flex-center money">
      <v-text-field
        :label="$t('exchange.money', { num: 1 })"
        v-model="store.firstValue"
        @input="store.changeFirstValue()"
      ></v-text-field>
      <v-select
        :items="store.currencyName"
        v-model="store.firstValueAbbr"
        @input="store.changeFirstValueAbbr()"
      ></v-select>
    </div>
    <div class="d-flex flex-center money">
      <v-text-field
        :label="$t('exchange.money', { num: 2 })"
        :hint="$t('exchange.hint')"
        readonly
        v-model="store.result"
      ></v-text-field>
      <v-select
        :items="store.currencyName"
        v-model="store.secondValueAbbr"
        @input="store.changeSecondValueAbbr()"
      ></v-select>
    </div>
  </div>
</template>

<script>
import { useIndexStore } from '@/store/indexStore';

export default {
  name: 'ConverterView',
  data() {
    return {
      store: useIndexStore(),
    };
  },
};
</script>

<!--// todo https://ru.bem.info/methodology/quick-start/-->
<!--// todo sass-->
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
