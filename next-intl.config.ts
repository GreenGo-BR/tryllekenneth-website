import { getRequestConfig } from 'next-intl/server';

export default getRequestConfig(async ({ locale }) => {
  return {
    messages: {},
    locale: locale ?? 'en',
  };
});
