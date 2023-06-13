import Vue from 'vue';
import VueI18n from 'vue-i18n';

Vue.use(VueI18n);

const loadLocaleMessages = () => {
  const locales = require.context(
    '../langs',
    true,
    /[A-Za-z0-9-_,\s]+\.json$/i,
  );
  const messages = {};
  locales.keys().forEach((key) => {
    const matched = key.match(/([A-Za-z0-9-_]+)\./i);
    if (matched && matched.length > 1) {
      const locale = matched[1];
      messages[locale] = locales(key);
    }
  });
  return messages;
};

const localeStorageLang = localStorage.getItem('lang');

export default new VueI18n({
  locale: localeStorageLang || process.env.VUE_APP_I18N_LOCALE || 'ru',
  fallbackLocale: process.env.VUE_APP_I18N_FALLBACK_LOCALE || 'ru',
  messages: loadLocaleMessages(),
});
