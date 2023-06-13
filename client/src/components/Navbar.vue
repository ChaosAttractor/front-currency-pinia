<template>
  <div class="d-flex flex-between">
    <Menu :links="links" />

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

<!--// todo components-->
<script>
import { links } from '../modules/navbar/entities/links';
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

<style scoped>
.nav {
  width: 100%;
  display: inline-flex;
  justify-content: space-between;
}

@media (max-width: 600px) {
  .nav {
    display: none;
  }
}
</style>
