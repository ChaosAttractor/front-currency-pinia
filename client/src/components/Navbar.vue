<template>
  <div class="d-flex">
    <div class="d-flex align-center">
      <v-btn class="btn" text :to="{ name: 'currency' }">
        <span>{{ $t('navbar.currency') }}</span>
      </v-btn>
    </div>
    <div class="d-flex align-center mx-2">
      <v-btn class="btn" text :to="{ name: 'converter' }">
        <span>{{ $t('navbar.converter') }}</span>
      </v-btn>
    </div>
    <SwitchLang />
  </div>
</template>

<script>
import SwitchLang from '@/components/SwitchLang.vue';
export default {
  components: { SwitchLang },
};
</script>
