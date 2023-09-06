// @ts-check
const { test, expect } = require('@chromaui/test-archiver')

// test('has title', async ({ page }) => {
//   await page.goto('http://localhost:3000');

//   // Expect a title "to contain" a substring.
//   await expect(page.getByRole('link', { name: 'Learn React' })).toBeVisible();
// });

test('Can get to docs page', async ({ page }) => {
  await page.goto('https://www.chromatic.com');

  // Expect a title "to contain" a substring.
  await page.getByLabel('main').getByRole('link', { name: 'Docs' }).click();

  await expect(page.getByText('Introduction to Chromatic')).toBeVisible();
});