<template>
  <div class="d-flex">
    <div class="d-flex align-center">
      <v-btn
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        text
        :to="{ name: 'currency' }"
      >
        <span>Курсы валют</span>
      </v-btn>
    </div>
    <div class="d-flex align-center ml-2">
      <v-btn
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        text
        :to="{ name: 'converter' }"
      >
        <span>Конвертация валют</span>
      </v-btn>
    </div>
  </div>
</template>
