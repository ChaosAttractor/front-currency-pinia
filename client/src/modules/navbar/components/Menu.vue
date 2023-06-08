<template>
  <div class="menu">
    <v-menu offset-y>
      <template v-slot:activator="{ on, attrs }">
        <v-btn color="primary" dark v-bind="attrs" v-on="on">
          <!--          // todo components -> icons -> componentIcon-->
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="icon"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M3 6h18v2H3V6m0 5h18v2H3v-2m0 5h18v2H3v-2Z"
            />
          </svg>
        </v-btn>
      </template>
      <v-list>
        <v-list-item v-for="link in links" :key="link.title">
          <v-list-item-title class="link">
            <router-link :to="link.to">
              {{ link.title }}
            </router-link>
          </v-list-item-title>
        </v-list-item>
        <v-list-item>
          <v-list-item-title>
            <SwitchLang />
          </v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </div>
</template>

<script>
import { RouterLink } from 'vue-router';
import SwitchLang from '@/modules/navbar/components/SwitchLang.vue';

export default {
  components: { SwitchLang, RouterLink },
  props: {
    links: {
      title: String,
      to: String,
    },
  },
};
</script>

<style scoped>
.menu {
  display: none;
}

.link > a {
  color: black;
  text-decoration: none;
}

@media (max-width: 600px) {
  .menu {
    display: block;
  }
}
</style>
