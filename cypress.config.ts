import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    baseUrl: 'https://rolandgolla.de'
  },
  viewportWidth: 1200
});
