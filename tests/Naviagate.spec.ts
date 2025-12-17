import { test, expect } from '@playwright/test';

test('login to tangerin', async ({ page }) => {
  await page.goto('https://tangerinestaging.ustadmobile.com/#/login');
  const name = await page.locator("#username");
  name.fill("user1");

  const pass = await page.locator('#password');
  name.fill("password");

  await page.locator("//span[contains(text(),'LOGIN')]").click();

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Tangerine Editor/);
});
