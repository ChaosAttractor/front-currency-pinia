import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
import ru from 'vuetify/lib/locale/ru';

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        'main-blue': '#428fda',
      },
    },
  },
  lang: {
    locales: { ru },
    current: localStorage.getItem('lang') || 'ru',
  },
  icons: {
    iconfont: 'mdiSvg', // 'mdi' || 'mdiSvg' || 'md' || 'fa' || 'fa4' || 'faSvg'
  },
});
