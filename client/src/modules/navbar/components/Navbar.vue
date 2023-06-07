<template>
  <div class="d-flex">
    <div class="d-flex align-center" v-for="link in links" :key="link.title">
      <v-btn class="btn" text :to="link.link">
        <span>{{ link.title }}</span>
      </v-btn>
    </div>
    <SwitchLang class="ml-5" />
  </div>
</template>

<script>
import { links } from '../entities/links';
import SwitchLang from './SwitchLang.vue';
export default {
  components: { SwitchLang },
  computed: {
    links() {
      return links(this.$i18n.locale);
    },
  },
};
</script>
