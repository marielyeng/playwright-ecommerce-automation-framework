import path from 'node:path';
import fs from 'node:fs';
import { test, expect } from '@playwright/test';
import { login, verifySuccessfulLogin } from '../pages/Login';

const authFile = path.resolve(__dirname, '../../playwright/.auth/user.json');

const loginDataFile = path.resolve(__dirname, '../../playwright/.auth/loginData.json');
const loginData = JSON.parse(fs.readFileSync(loginDataFile, 'utf-8')) as {
    username: string,
    password: string
}

test('should login and save auth state', async ({ page }) => {
    await page.goto('');

    await login(page, loginData.username, loginData.password);

    await verifySuccessfulLogin(page);
    await expect(page).toHaveURL('inventory.html');
    await page.context().storageState({ path: authFile });

})