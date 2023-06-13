<template>
  <router-view />
</template>

<script>
import { useApiStore } from '@/store/apiStore';

export default {
  data() {
    return {
      apiStore: useApiStore(),
    };
  },
  mounted() {
    this.apiStore.getCurrency();
  },
};
</script>
