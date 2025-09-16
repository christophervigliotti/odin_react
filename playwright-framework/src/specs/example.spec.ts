//example.spec.ts
import { test, expect } from '@playwright/test';
import { ExampleClass } from '../pages/example.page';

test('Navigate to Google', async ({ page }) => {
  await page.goto('https://google.com/');
  const url = await page.url();
  expect(url).toContain('google');
});
test('Search for Playwright', async ({ page }) => {
  await page.goto('https://stackoverflow.com/');
  let exampletest = new ExampleClass(page);
  await exampletest.typeSearchText();
  await exampletest.pressEnter();
  const text = await exampletest.theWholeDamnPage();
  await console.log(text);
  expect(
    text.includes('Newest Questions') || text.includes('Human')
  ).toBeTruthy();
});

test('WTF', async ({ page }) => {
  await page.goto('https://whatthefuckjusthappenedtoday.com/');
  let blahblah = new ExampleClass(page);
  const bloop = await blahblah.theWholeDamnPage();
  expect(bloop).toContain('Your essential guide');
});