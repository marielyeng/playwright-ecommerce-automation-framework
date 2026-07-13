import { test } from '@playwright/test';
import { verifyLoginError, verifyStillOnLoginPage, login } from './pages/Login';
import fs from 'node:fs';
import path from 'node:path';

const loginDataFile = path.resolve(__dirname, '../playwright/.auth/loginData.json');
const validCreds = JSON.parse(fs.readFileSync(loginDataFile, 'utf-8')) as {
    username: string;
    password: string;
};

const invalidCredentials = [
    { case: 'wrong password', username: validCreds.username, password: 'wrongpass123' },
    { case: 'non-existent username', username: 'does_not_exist', password: validCreds.password },
    { case: 'empty username', username: '', password: 'somepassword' },
    { case: 'empty password', username: validCreds.username, password: '' },
    { case: 'both empty', username: '', password: '' },
];

test.describe('Login - negative scenarios', () => {
    for (const { case: caseName, username, password } of invalidCredentials) {
        test(`should reject login: ${caseName}`, async ({ page }) => {
            await page.goto('');
            await login(page, username, password);
            await verifyLoginError(page);
            await verifyStillOnLoginPage(page);
        });
    }
});