import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    baseUrl: 'https://rolandgolla.de'
  },
  retries: {
      runMode: 2
  },
  viewportWidth: 1200,
  experimentalMemoryManagement: true,
  numTestsKeptInMemory: 20
});
