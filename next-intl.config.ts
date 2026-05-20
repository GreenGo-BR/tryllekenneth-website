import { defineConfig } from 'next-intl/config';

export default defineConfig({
  locales: ['en', 'da'],
  defaultLocale: 'da',
  localePrefix: 'always',
});
