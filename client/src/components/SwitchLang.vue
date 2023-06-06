<template>
  <v-btn @click="switchLang">
    <span>🌐{{ $i18n.locale }}</span>
  </v-btn>
</template>

<script>
export default {
  methods: {
    switchLang() {
      this.$i18n.locale === 'en'
        ? (this.$i18n.locale = 'ru')
        : (this.$i18n.locale = 'en');
      localStorage.setItem('lang', this.$i18n.locale);
      if (this.$route.path == '/') {
        location.reload();
      }
    },
  },
};
</script>

<style scoped>
.theme--dark.v-btn.v-btn--has-bg {
  background: #428fda;
}
</style>
