import {test, expect} from '@playwright/test';
import { login, verifySuccessfulLogin } from './pages/Login';
import * as products  from './pages/Products';
import * as cart from './pages/Cart';


test('should add products to cart and verify the cart', async ({ page }) => {
        await page.goto('');
        await login(page, 'standard_user', 'secret_sauce');

        await verifySuccessfulLogin(page);
        const firstProduct = await products.addProductToCart(page, 0);

        const { cartHeading, qtyLabel, descriptionLabel } = await cart.cartItems(page, 'Your Cart', 'QTY', 'DESCRIPTION');
        expect(firstProduct.name).not.toBeNull();

        await expect(cartHeading).toBeVisible();
        await expect(qtyLabel).toBeVisible();
        await expect(descriptionLabel).toBeVisible();

        await expect(page.locator('.inventory_item_name').first()).toHaveText(firstProduct.name!);
})

test('should be able to click product label and add products to cart', async ({ page }) => {
        await page.goto('');
        await login(page, 'standard_user', 'secret_sauce');
        await verifySuccessfulLogin(page);

        const firstProduct = page.locator('[data-test="inventory-item-name"]').first();
        const productName = await firstProduct.textContent();
        await firstProduct.click();

        const url = new URL(page.url());

        expect(url.pathname).toBe('/inventory-item.html');
        expect(url.searchParams.has('id')).toBeTruthy();

         const productTitle = await page
        .locator('.inventory_details_name.large_size')
        .textContent();

        expect(productTitle).toBe(productName);
})