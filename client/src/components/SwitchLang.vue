<template>
  <v-btn class="btn" color="main-blue" @click="switchLang">
    <span class="btn_text btn_flex btn_gap">
      <WorldIcon width="24" height="24" color="white" />
      {{ $i18n.locale }}
    </span>
  </v-btn>
</template>

<script>
import WorldIcon from '@/components/icons/WorldIcon.vue';

export default {
  methods: {
    switchLang() {
      this.$i18n.locale = this.$i18n.locale === 'en' ? 'ru' : 'en';
      this.$vuetify.lang.current = this.$i18n.locale;
      localStorage.setItem('lang', this.$i18n.locale);
    },
  },
  components: { WorldIcon },
};
</script>

<style lang="scss" scoped>
@import '@/assets/_variables';
.btn {
  &_gap {
    gap: 5px;
  }
  &_text {
    font-size: $xm;
  }
  &_flex {
    display: flex;
    align-items: center;
  }
}
@media (max-width: 600px) {
  .v-btn {
    color: white;
  }
}
</style>
