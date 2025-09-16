//playwright.config.ts
import { PlaywrightTestConfig } from '@playwright/test';
const config: PlaywrightTestConfig = {
  use: {
    baseURL: 'http://google.com/',
    browserName: 'webkit',
    headless: true,
  },
};
export default config;