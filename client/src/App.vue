<template>
  <router-view />
</template>

<script>
import { useIndexStore } from '@/store/indexStore';

export default {
  data() {
    return {
      store: useIndexStore(),
    };
  },
  mounted() {
    this.store.getCurrency();
  },
};
</script>
