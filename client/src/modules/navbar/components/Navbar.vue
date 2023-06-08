<template>
  <div class="d-flex flex-between">
    <div class="menu">
      <v-menu class="menu-bg" offset-y>
        <template v-slot:activator="{ on, attrs }">
          <v-btn color="primary" dark v-bind="attrs" v-on="on">
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
              <SwitchLang :type="'mini'" />
            </v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </div>

    <div class="nav">
      <div class="d-flex gap-10px">
        <v-btn
          class="btn"
          text
          v-for="link in links"
          :key="link.title"
          :to="link.to"
        >
          <span>{{ link.title }}</span>
        </v-btn>
      </div>
      <SwitchLang class="ml-5" />
    </div>
  </div>
</template>

<script>
import { RouterLink } from 'vue-router';
import { links } from '../entities/links';
import SwitchLang from './SwitchLang.vue';
export default {
  components: { SwitchLang, RouterLink },
  computed: {
    links() {
      return links(this.$i18n.locale);
    },
  },
};
</script>

<style scoped>
.menu {
  display: none;
}

.nav {
  width: 100%;
  display: inline-flex;
  justify-content: space-between;
}

.link > a {
  color: black;
  text-decoration: none;
}

@media (max-width: 600px) {
  .menu {
    display: block;
  }

  .nav {
    display: none;
  }
}
</style>
