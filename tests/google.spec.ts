import{test, expect}from '@playwright/test';

test('Home page should load successfully @smoke', async ({ page }) => {
  await page.goto('https://www.google.com/');
  await expect(page).toHaveTitle(/Google/);
  await page.waitForTimeout(2000);
});

test('Search box should be visible @regression', async ({ page }) => {
  await page.goto('https://www.google.com/');
  const searchBox = page.locator('textarea[name="q"]');
  await expect(searchBox).toBeVisible();
  await page.waitForTimeout(2000);
});

test('Should show results after searching a keyword @smoke', async ({ page }) => {
  await page.goto('https://www.google.com/');
  const searchBox = page.locator('textarea[name="q"]');
  await searchBox.fill('Playwright');
  await searchBox.press('Enter');
  await page.waitForTimeout(2000);
});

test('Test not completed @wip', async ({ page }) => {
  await page.goto('https://www.google.com/');
  const searchBox = page.locator('textarea[name="q"]');
  await searchBox.fill('Playwright');
  await searchBox.press('Enter');
  await page.waitForTimeout(2000);
});