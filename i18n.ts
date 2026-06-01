import { getRequestConfig } from 'next-intl/server';
import en from './messages/en.json';
import da from './messages/da.json';

const messages: Record<string, any> = {
  en,
  da,
};

export default getRequestConfig(async ({ locale }) => {
  // Ensure locale is one of the supported locales
  const validLocale = Object.keys(messages).includes(locale) ? locale : 'en';
  
  return {
    messages: messages[validLocale],
    locale: validLocale,
  };
});
