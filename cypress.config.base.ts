import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    baseUrl: 'https://rolandgolla.de',
  },
  env: {
    TS_NODE_PROJECT: './tsconfig.json',
  },
  viewportWidth: 1200,
  retries: {
      runMode: 2
  }  
});
