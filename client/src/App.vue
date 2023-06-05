<template>
  <router-view />
</template>

<script>
import { useCounterStore } from "./store/counterStore";
export default {
  name: "App",

  data: () => ({
    //
    counterStore: useCounterStore(),
  }),
};
</script>
