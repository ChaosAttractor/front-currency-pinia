<template>
  <div class="d-flex">
    <div class="d-flex align-center">
      <v-btn text :to="{ name: 'currency' }">
        <span>{{ $t('navbar.currency') }}</span>
      </v-btn>
    </div>
    <div class="d-flex align-center ml-2">
      <v-btn text :to="{ name: 'converter' }">
        <span>{{ $t('navbar.converter') }}</span>
      </v-btn>
    </div>
    <div class="d-flex align-center ml-2">
      <v-btn color="blue-grey" @click="switchLang">
        <span>{{ $i18n.locale }}</span>
      </v-btn>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    // todo компонент
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
