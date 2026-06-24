import { expect, Page } from '@playwright/test';

export async function login(page: Page, username: string, password: string) {

  await page.locator('[data-test="username"]').fill(username);
  await page.locator('[data-test="password"]').fill(password);
  await page.locator('[data-test="login-button"]').click();
  await expect(page).toHaveURL('inventory.html');

};

export async function verifySuccessfulLogin(page: Page) {
  await expect(page).toHaveURL(/inventory\.html/);
}