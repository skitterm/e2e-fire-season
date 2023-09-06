// @ts-check
const { test, expect } = require('@chromaui/test-archiver')

// test('has title', async ({ page }) => {
//   await page.goto('http://localhost:3000');

//   // Expect a title "to contain" a substring. 
//   await expect(page.getByRole('link', { name: 'Learn React' })).toBeVisible();
// });

test('haz title', async ({ page }) => {
  await page.goto('https://www.chromatic.com');

  // Expect a title "to contain" a substring.
  await expect(page.getByRole('link', { name: 'Schedule live demo' })).toBeVisible();
});

test('haz something else', async ({ page }) => {
  await page.goto('https://www.chromatic.com');

  // Expect a title "to contain" a substring.
  await expect(page.getByRole('link', { name: 'Learn about publishing' })).toBeVisible();
});

test('has some title', async ({ page }) => {
  await page.goto('https://www.chromatic.com');

  await expect(page.getByText('Ready to merge!')).toBeVisible();
});

// test('get started link', async ({ page }) => { 
//   await page.goto('https://playwright.dev/');

//   // Click the get started link.
//   await page.getByRole('link', { name: 'Get started' }).click();

//   // Expects page to have a heading with the name of Installation.
//   await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
// });
