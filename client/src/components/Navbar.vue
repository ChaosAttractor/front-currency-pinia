<template>
  <div class="nav">
    <Menu :links="links" />

    <div class="nav_navbar nav_navbar--between">
      <div class="nav_navbar--flex nav_navbar--gap">
        <v-btn text v-for="link in links" :key="link.title" :to="link.to">
          <span>{{ link.title }}</span>
        </v-btn>
      </div>
      <SwitchLang />
    </div>
  </div>
</template>

<script>
import { links } from '@/entities/links';
import SwitchLang from './SwitchLang.vue';
import Menu from '@/components/Menu.vue';
export default {
  components: { Menu, SwitchLang },
  computed: {
    links() {
      return links(this.$i18n.locale);
    },
  },
};
</script>

<style lang="scss" scoped>
.nav {
  display: flex;
  width: 100%;
  &_navbar {
    display: flex;
    width: 100%;
    @media (max-width: 600px) {
      display: none;
    }
    &--between {
      justify-content: space-between;
    }
    &--flex {
      display: flex;
    }
    &--gap {
      gap: 10px;
    }
  }
}
</style>
