<template>
  <v-btn class="btn" @click="switchLang">
    <span class="d-flex flex-center gap-5px text-lg">
      <WorldIcon width="24" height="24" color="white" />
      {{ $i18n.locale }}
    </span>
  </v-btn>
</template>

<script>
import WorldIcon from '@/components/icons/WorldIcon.vue';

export default {
  methods: {
    // todo $i18n перейти на $vuetify.lang
    switchLang() {
      this.$i18n.locale = this.$i18n.locale === 'en' ? 'ru' : 'en';
      this.$vuetify.lang.current = this.$i18n.locale;
      localStorage.setItem('lang', this.$i18n.locale);
    },
  },
  components: { WorldIcon },
};
</script>

<style scoped>
.v-btn.v-btn--has-bg {
  background: var(--main-blue);
}
</style>
