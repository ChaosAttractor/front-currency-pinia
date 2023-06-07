<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <Navbar />
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import Navbar from '@/modules/navbar/components/Navbar.vue';

export default {
  components: { Navbar },
};
</script>
