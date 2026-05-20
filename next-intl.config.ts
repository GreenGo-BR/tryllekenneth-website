import { defineConfig } from 'next-intl/config';

export default defineConfig({
  locales: ['en', 'da'],
  defaultLocale: 'en',
  localePrefix: 'as-needed',
});
