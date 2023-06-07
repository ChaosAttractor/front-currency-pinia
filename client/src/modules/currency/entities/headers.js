import i18n from '@/i18n';

export const headers = (locale) => {
  return [
    {
      text: i18n.messages[locale].headers.numcode,
      value: 'NumCode',
      align: 'center',
    },
    {
      text: i18n.messages[locale].headers.charcode,
      value: 'CharCode',
      align: 'center',
    },
    {
      text: i18n.messages[locale].headers.nominal,
      value: 'Nominal',
      align: 'center',
    },
    {
      text: i18n.messages[locale].headers.name,
      value: 'Name',
      align: 'center',
    },
    {
      text: i18n.messages[locale].headers.value,
      value: 'Value',
      align: 'center',
    },
  ];
};
