<template>
  <div class="menu">
    <v-menu offset-y>
      <template v-slot:activator="{ on, attrs }">
        <v-btn color="primary" dark v-bind="attrs" v-on="on">
          <MenuIcon width="24" height="24" color="white" />
        </v-btn>
      </template>
      <v-list>
        <v-list-item v-for="link in links" :key="link.title">
          <v-list-item-title class="menu__link">
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
import SwitchLang from '@/components/SwitchLang.vue';
import MenuIcon from '@/components/icons/MenuIcon.vue';

export default {
  components: { SwitchLang, RouterLink, MenuIcon },
  props: {
    links: {
      title: String,
      to: String,
    },
  },
};
</script>

<style lang="scss" scoped>
.menu {
  display: none;
  @media (max-width: 600px) {
    display: block;
  }
  &__link {
    a {
      color: black;
      text-decoration: none;
    }
  }
}
</style>
