import { test, expect } from '@playwright/test';
import urls from './fixtures/urls.json';

urls.forEach((url) => {
  test(`Tests ${url.name}`, async ({ page }) => {
    await page.goto(url.url);
    await expect(
      page.getByAltText(
        'Roland Golla - Consultant für Website Testing und PHP Refactoring'
      )
    ).toBeVisible();
    await expect(page).toHaveScreenshot(`${url.url} + .png`, {
      fullPage: true,
    });
  });
});
