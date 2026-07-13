import { expect, Page } from '@playwright/test';

export async function login(page: Page, username: string, password: string) {

  await page.locator('[data-test="username"]').fill(username);
  await page.locator('[data-test="password"]').fill(password);
  await page.locator('[data-test="login-button"]').click();

};

export async function verifySuccessfulLogin(page: Page) {
  await expect(page).toHaveURL(/inventory\.html/);
}

export async function verifyLoginError(page: Page, expectedMessage?: string) {
    const errorLocator = page.locator('[data-test="error"]');
    await expect(errorLocator).toBeVisible();
    if (expectedMessage) {
        await expect(errorLocator).toContainText(expectedMessage);
    }
}

export async function verifyStillOnLoginPage(page: Page) {
    await expect(page).toHaveURL('https://www.saucedemo.com/');
}