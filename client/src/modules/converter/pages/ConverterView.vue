<template>
  <div class="container container_mt container_gap">
    <div class="container__money container__money_flex">
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
    <div class="container__money container__money_flex">
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

<!--переписал на БЭМ-->
<!--элемент отделяется __ -->
<!--модификатор отделяется _ -->
<!--vuetify отделяет модификатор с помощью -- -->

<style lang="scss" scoped>
.container {
  display: flex;
  justify-content: center;
  @media (max-width: 600px) {
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
  }
  &__money {
    width: 200px;
    &_flex {
      display: flex;
    }
  }
  &_mt {
    margin-top: 30px;
  }
  &_gap {
    gap: 30px;
    @media (max-width: 600px) {
      gap: 10px;
    }
  }
}
</style>
