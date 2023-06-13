<template>
  <router-view />
</template>

<script>
import { useActionsApiStore } from '@/store/apiStore/actionsApi';

export default {
  data() {
    return {
      actionsApi: useActionsApiStore(),
    };
  },
  mounted() {
    this.actionsApi.getCurrency();
  },
};
</script>
