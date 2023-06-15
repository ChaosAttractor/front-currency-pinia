import i18n from '@/plugins/i18n';

export const links = (locale) => {
  return [
    {
      title: i18n.messages[locale].navbar.currency,
      to: '/',
    },
    {
      title: i18n.messages[locale].navbar.converter,
      to: '/converter',
    },
  ];
};
