import i18n from '@/i18n';
// todo смена языка не работает при изменении без перезагрузки
export const headers = [
  {
    text: i18n.messages[i18n.locale].headers.numcode,
    value: 'NumCode',
    align: 'center',
  },
  {
    text: i18n.messages[i18n.locale].headers.charcode,
    value: 'CharCode',
    align: 'center',
  },
  {
    text: i18n.messages[i18n.locale].headers.nominal,
    value: 'Nominal',
    align: 'center',
  },
  {
    text: i18n.messages[i18n.locale].headers.name,
    value: 'Name',
    align: 'center',
  },
  {
    text: i18n.messages[i18n.locale].headers.value,
    value: 'Value',
    align: 'center',
  },
];
